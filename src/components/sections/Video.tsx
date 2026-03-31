"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), { ssr: false });

interface Story {
    id: number;
    playbackId?: string;
    title?: string;
    thumbnailTime?: number;
}

const stories: Story[] = [
    { id: 1, playbackId: "HWetRi5hqgQFsS4hEAMtNRh00fIOvebnLjD3ytAAwq88", thumbnailTime: 0 },
    { id: 2, playbackId: "kb68fIiLM7lEtZGZn02anDSsvuCQGR9W1bkoE6zx381Y", thumbnailTime: 0 },
    { id: 3, playbackId: "m2c00UKw4OL3RO1WuuKZYoINHbQf4Rzic2er6JxSSavE", thumbnailTime: 0 },
    { id: 4, playbackId: "NzPAbRKdrZTAPCn01BHAFf2Aj7PTXQQiSiVwkcL3027u00", thumbnailTime: 0 },
    { id: 5, playbackId: "ST00RkutH7j028U7DDvRr1sjxFIHfFjIrxWS2aeZkepkQ", thumbnailTime: 0 },
    { id: 6, playbackId: "00OZ2dkwYR8PWD2NCRp00pGIhyZMnxkRWB017Ktzn5XrE00", thumbnailTime: 0 },
    { id: 7, playbackId: "caELhbFuaqRImZuSatYUxtMeM24yMv9WZj23dD00jAD00", thumbnailTime: 0 },
];

function getThumbnailUrl(playbackId: string, time: number = 3) {
    return `https://image.mux.com/${playbackId}/thumbnail.jpg?time=${time}&width=600&height=1067&fit_mode=smartcrop`;
}

export function Video() {
    const [selectedStory, setSelectedStory] = useState<Story | null>(null);

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
                            Video
                        </p>
                        <h2
                            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light italic text-white"
                            style={{ lineHeight: 1.1 }}
                        >
                            Watch Me <span className="text-gradient">Work</span>
                        </h2>
                        <p className="mx-auto mt-5 max-w-xl text-base text-slate-400 md:text-lg">
                            See my process in action.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="flex flex-nowrap lg:flex-wrap overflow-x-auto lg:overflow-x-visible snap-x lg:snap-none snap-mandatory hide-scrollbar justify-start lg:justify-center gap-4 lg:gap-6 pb-12 lg:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
                    {stories.map((story) => (
                        <ScrollReveal
                            key={story.id}
                            delay={story.id * 100}
                            className="w-[85vw] sm:w-[45vw] lg:w-[calc(25%-18px)] shrink-0 snap-center"
                        >
                            <div
                                onClick={() => story.playbackId && setSelectedStory(story)}
                                className="group relative rounded-xl overflow-hidden bg-slate-900/50 border border-white/5 hover:border-amber-400/30 transition-all duration-300 cursor-pointer"
                            >
                                {/* Thumbnail */}
                                <div className="relative w-full aspect-9/16 bg-black">
                                    {story.playbackId ? (
                                        <img
                                            src={getThumbnailUrl(story.playbackId, story.thumbnailTime)}
                                            alt={story.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                                                <div className="w-3 h-3 rounded-full bg-gold animate-pulse" />
                                            </div>
                                        </div>
                                    )}

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

                                {/* Title Overlay */}

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
                            className="relative w-full max-w-[450px] aspect-9/16 bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
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
                                className="w-full h-full object-contain"
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