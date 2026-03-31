"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), { ssr: false });

interface Story {
    id: number;
    playbackId: string;
    title?: string;
    thumbnailTime?: number;
    views?: string;
    category: "Reel" | "Ad Creative";
}

const stories: Story[] = [
    { id: 5, playbackId: "ST00RkutH7j028U7DDvRr1sjxFIHfFjIrxWS2aeZkepkQ", thumbnailTime: 1, views: "985K", category: "Reel" },
    { id: 4, playbackId: "NzPAbRKdrZTAPCn01BHAFf2Aj7PTXQQiSiVwkcL3027u00", thumbnailTime: 1.3, views: "561K", category: "Reel" },
    { id: 6, playbackId: "00OZ2dkwYR8PWD2NCRp00pGIhyZMnxkRWB017Ktzn5XrE00", thumbnailTime: 2.3, views: "427K", category: "Reel" },
    { id: 7, playbackId: "caELhbFuaqRImZuSatYUxtMeM24yMv9WZj23dD00jAD00", thumbnailTime: 5.6, views: "171K", category: "Reel" },
    { id: 3, playbackId: "fIHApKoir89bcoNYrBdWUSgCEnlfYA101oNHptAIM1xo", thumbnailTime: 1.5, views: "133K", category: "Reel" },
    { id: 1, playbackId: "HWetRi5hqgQFsS4hEAMtNRh00fIOvebnLjD3ytAAwq88", thumbnailTime: 5, category: "Ad Creative" },
    { id: 8, playbackId: "CPeqj2lAqBdkiP6ZDExovt3g6nq89OmW3zmq3xqqfOk", thumbnailTime: 0, category: "Ad Creative" },
    { id: 9, playbackId: "NVulNz2urS902pAMihkXamLz02JX4C5mA02Q5jaNs5JAMM", thumbnailTime: 0, category: "Ad Creative" },
    { id: 10, playbackId: "E2lF97U01rOj3wLvKCh6wFeT7pbC97fPwjarIMpK3K01w", thumbnailTime: 3, category: "Ad Creative" },
];

function parseViews(views: string | undefined): number {
    if (!views) return 0;
    const clean = views.replace(/[^0-9.]/g, "");
    let num = parseFloat(clean);
    if (views.toLowerCase().includes("k")) num *= 1000;
    if (views.toLowerCase().includes("m")) num *= 1000000;
    return num;
}

function getThumbnailUrl(playbackId: string, time: number = 3) {
    return `https://image.mux.com/${playbackId}/thumbnail.jpg?time=${time}&width=600&height=1067&fit_mode=smartcrop`;
}

export function Video() {
    const [selectedStory, setSelectedStory] = useState<Story | null>(null);
    const [activeFilter, setActiveFilter] = useState("All");

    const categories = ["All", "Reels", "Ad Creatives"];

    const filteredStories = useMemo(() => {
        let list = stories;
        if (activeFilter === "Reels") list = stories.filter(s => s.category === "Reel");
        if (activeFilter === "Ad Creatives") list = stories.filter(s => s.category === "Ad Creative");

        return [...list].sort((a, b) => parseViews(b.views) - parseViews(a.views));
    }, [activeFilter]);

    // Handle ESC key to close modal
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedStory(null);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (selectedStory) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedStory]);

    return (
        <section className="relative pb-12 lg:pb-28 bg-transparent px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <ScrollReveal>
                    <div className="mb-12 text-center md:mb-16">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400/60">
                            Works
                        </p>
                        <h2
                            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light italic text-white"
                            style={{ lineHeight: 1.1 }}
                        >
                            Viral <span className="text-gradient">Samples</span>
                        </h2>
                        <p className="mx-auto mt-5 max-w-xl text-base text-slate-400 md:text-lg">
                            Here are some of my viral works.
                        </p>
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={cn(
                                    "rounded-full border px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-300",
                                    activeFilter === cat
                                        ? "border-amber-400 bg-amber-400/10 text-amber-400 ring-1 ring-amber-400/50"
                                        : "border-white/10 text-slate-400 hover:border-amber-400/40 hover:text-white"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </ScrollReveal>

                <div className="flex flex-nowrap lg:flex-wrap overflow-x-auto lg:overflow-x-visible snap-x lg:snap-none snap-mandatory hide-scrollbar justify-start lg:justify-center gap-4 lg:gap-6 pb-12 lg:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
                    {filteredStories.map((story) => (
                        <ScrollReveal
                            key={story.id}
                            delay={story.id * 100}
                            className="w-[85vw] sm:w-[45vw] lg:w-[calc(25%-18px)] shrink-0 snap-center"
                        >
                            <div
                                onClick={() => setSelectedStory(story)}
                                className="group relative rounded-xl overflow-hidden bg-slate-900/50 border border-white/5 hover:border-amber-400/30 transition-all duration-300 cursor-pointer"
                            >
                                {/* Thumbnail */}
                                <div className="relative w-full aspect-9/16 bg-black">
                                    <img
                                        src={getThumbnailUrl(story.playbackId, story.thumbnailTime)}
                                        alt={story.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Views Count Overlay */}
                                    {story.views && (
                                        <div className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-md border border-white/10 flex items-center gap-1.5 transition-transform duration-300 group-hover:scale-105">
                                            <svg className="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            <span className="text-[15px] font-bold text-white/90 tracking-wider">
                                                {story.views}
                                            </span>
                                        </div>
                                    )}

                                    {/* Category Tag Overlay */}
                                    <div className="absolute top-3 right-3 z-10">
                                        <span className="rounded-full bg-amber-400/10 backdrop-blur-md border border-amber-400/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-amber-400">
                                            {story.category === "Ad Creative" ? "Ads" : story.category}
                                        </span>
                                    </div>

                                    {/* Play Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                                        <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-white/20 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                                            <svg
                                                className="w-8 h-8 text-amber-400 ml-1"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Video Modal Player */}
                {selectedStory && (
                    <div
                        className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
                        onClick={() => setSelectedStory(null)}
                    >
                        <div
                            className="relative w-full max-w-[500px] max-h-[90vh] aspect-9/16 bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-colors border border-white/10"
                                onClick={() => setSelectedStory(null)}
                                aria-label="Close video"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <MuxPlayer
                                playbackId={selectedStory.playbackId}
                                metadataVideoTitle={selectedStory.title || "Process Video"}
                                className="w-full h-full object-cover"
                                autoPlay
                                accentColor="#fbbf24"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
