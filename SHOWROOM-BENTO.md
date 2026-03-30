# Showroom: Bento Grid Design

## Overview
Based on the reference image, we are adding a new **Results Bento Grid** to the Showroom section. The structure will feature "Results, Copywriting, and Videos" alongside the existing cards. 

The Bento Grid employs a premium, dark editorial aesthetic (`bg-[#0A0F1E]`) with metallic gold accents. It acts as a dashboard of achievements using a multi-column CSS grid.

---

## 🏗️ Grid Architecture

The grid can be built using a **12-column system** (`grid-cols-1 lg:grid-cols-12`), wrapping four distinct cards:

### 1. The Main Hero Metric (Left Column)
- **Grid Span**: `lg:col-span-5`
- **Content**:
  - **Overline**: "MACA EXPRESS TRAVEL SERVICES" (Gold, uppercase, widest tracking).
  - **Big Number**: "3,543" (Massive display serif font).
  - **Subtitle**: "NEW INQUIRIES" (Uppercase, light tracking).
  - **Description**: "Shifting to targeted ad structures generated lower cost per conversation and a +31% jump in purchases in just 30 days."
- **Style**: Dark card spanning the full height of both right-side rows.

### 2. The Visual Case Study (Top Right)
- **Grid Span**: `lg:col-span-7`
- **Content**: 
  - A responsive image container for the case study/video thumbnail.
  - **Bottom Label**: "CASE STUDY VISUALIZATION / 01" seamlessly glowing at the bottom.
- **Style**: Aspect ratio container (`aspect-video` or similar) with an internal gradient fade for text legibility. 

### 3. The Multiplier Result (Bottom Left of Right Column)
- **Grid Sub-Span**: We'll nest a 2-column grid inside the `lg:col-span-7` wrapper. This card will take `md:col-span-1`.
- **Content**:
  - **Big Metric**: "10x" (Display Serif).
  - **Subtitle**: "MORE CONVERSATIONS" (Gold).
  - **Description**: "₱158K generated in 3 days. EV eliminated cheap leads and delivered a 10x multiplier on high-intent conversations."

### 4. The Revenue Tracker (Bottom Right of Right Column)
- **Grid Sub-Span**: `md:col-span-1`.
- **Content**:
  - **Overline**: "JUHAYDAH SOUVENIR SHOP" (Gold).
  - **Big Metric**: "₱85K" with a small icon accessory representing a wallet/money.
  - **Subtitle**: "REVENUE TRACKED".
  - **Description**: "Transformed ₱2,562 of spend into massive returns, proving intelligent targeting beats budget size."

---

## 💻 Technical Implementation Strategy

### Container Layout Blueprint
```tsx
<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 mt-16 max-w-6xl mx-auto">
  
  {/* 1. MAIN CARD (Left) */}
  <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-[#0F1424] border border-white/5 relative overflow-hidden group">
     {/* Content inside... */}
  </div>

  {/* RIGHT COLUMN WRAPPER */}
  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
    
    {/* 2. VISUAL CARD (Spans full width of right col) */}
    <div className="sm:col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden bg-surface-container-high border border-white/5">
      {/* Image & Gradient Content inside... */}
    </div>

    {/* 3. MULTIPLIER CARD */}
    <div className="p-6 md:p-8 rounded-2xl bg-[#0F1424] border border-white/5">
      {/* Multiplier Content inside... */}
    </div>

    {/* 4. REVENUE CARD */}
    <div className="p-6 md:p-8 rounded-2xl bg-[#0F1424] border border-white/5">
      {/* Revenue Content inside... */}
    </div>
    
  </div>
</div>
```

## Styling Tokens
- **Backgrounds**: Deep premium navy/blue (`#0F1424` or `bg-surface-container-high`).
- **Typography Labels**: `text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gold/90`.
- **Display Numbers**: `font-display tracking-tight text-white` (Scaling from `text-5xl` up to `text-8xl` on the main card).
- **Secondary Text**: `text-sm leading-relaxed text-muted-foreground`.
- **Accents**: Subtle CSS dropshadows, glassmorphism `border-white/5`, and background radial glow (`bg-gold/5 blur-[80px]`).
