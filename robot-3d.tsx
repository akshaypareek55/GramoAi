
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Zap, Cpu, Trophy, BookOpen, Sparkles } from "lucide-react";

export function Robot3D() {
  const robot = PlaceHolderImages.find(img => img.id === "hero-robot");
  
  return (
    <div className="relative w-full h-[500px] md:h-[800px] flex items-center justify-center">
      {/* Dynamic Background Energy Fields */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
        {/* Deep Glow Foundation */}
        <div className="absolute w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-primary/10 blur-[150px] rounded-full animate-pulse-soft" />
        
        {/* Outer Orbiting Ring - Neon Blue */}
        <div className="absolute w-[380px] h-[380px] md:w-[650px] md:h-[650px] border-[1px] border-secondary/20 rounded-full animate-spin-slow shadow-[0_0_50px_rgba(0,245,255,0.1)]" />
        
        {/* Middle Pulsing Ring - Neon Purple */}
        <div className="absolute w-[320px] h-[320px] md:w-[550px] md:h-[550px] border-[2px] border-purple-500/30 rounded-full animate-spin-reverse-slow shadow-[inset_0_0_40px_rgba(168,85,247,0.2)]" />
        
        {/* Inner Vertical Ring - Cyan Accent */}
        <div className="absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] border-l-2 border-r-2 border-secondary/40 rounded-full animate-pulse-soft rotate-45" />
      </div>
      
      {/* Floating HUD Interaction Cards */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {/* AI Tools Card */}
        <div className="absolute top-[12%] left-[2%] md:left-[8%] animate-float">
          <div className="glass p-5 rounded-2xl border-primary/30 flex flex-col items-center gap-2 backdrop-blur-3xl neon-glow-primary group">
            <div className="p-2.5 bg-primary/20 rounded-xl">
              <Zap className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-center">
              <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Inventory</div>
              <div className="text-sm font-headline font-bold">100+ Tools</div>
            </div>
          </div>
        </div>

        {/* Prompts Card */}
        <div className="absolute top-[22%] right-[2%] md:right-[5%] animate-float-delayed">
          <div className="glass p-5 rounded-2xl border-secondary/30 flex flex-col items-center gap-2 backdrop-blur-3xl neon-glow-secondary group">
            <div className="p-2.5 bg-secondary/20 rounded-xl">
              <Cpu className="w-6 h-6 text-secondary group-hover:rotate-12 transition-transform" />
            </div>
            <div className="text-center">
              <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Library</div>
              <div className="text-sm font-headline font-bold">500+ Prompts</div>
            </div>
          </div>
        </div>

        {/* AI Battles Card */}
        <div className="absolute bottom-[18%] left-[5%] md:left-[12%] animate-float-delayed">
          <div className="glass p-5 rounded-2xl border-white/10 flex flex-col items-center gap-2 backdrop-blur-3xl group">
            <div className="p-2.5 bg-white/10 rounded-xl">
              <Trophy className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-center">
              <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Arena</div>
              <div className="text-sm font-headline font-bold">Live Battles</div>
            </div>
          </div>
        </div>

        {/* Earn Guides Card */}
        <div className="absolute bottom-[28%] right-[5%] md:right-[10%] animate-float">
          <div className="glass p-5 rounded-2xl border-purple-500/30 flex flex-col items-center gap-2 backdrop-blur-3xl neon-glow-purple group">
            <div className="p-2.5 bg-purple-500/20 rounded-xl">
              <BookOpen className="w-6 h-6 text-purple-400 group-hover:translate-y-1 transition-transform" />
            </div>
            <div className="text-center">
              <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Monetize</div>
              <div className="text-sm font-headline font-bold">50+ Guides</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Robot Showcase */}
      <div className="relative z-20 animate-float transition-all duration-700 hover:scale-[1.02] cursor-default">
        <div className="relative p-6 md:p-12">
          {/* Cyan Eye Glow Shadow */}
          <div className="absolute inset-0 bg-secondary/10 blur-[100px] rounded-full scale-125 opacity-40" />
          
          <div className="relative glass p-3 rounded-[3rem] border-white/10 overflow-hidden shadow-[0_0_80px_rgba(0,245,255,0.15)] group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image
              src={robot?.imageUrl || "https://picsum.photos/seed/gramo-hero/800/800"}
              alt="Premium Friendly AI Robot"
              width={550}
              height={550}
              className="rounded-[2.5rem] object-cover mix-blend-screen brightness-110 contrast-125"
              priority
              data-ai-hint="white 3d robot friendly cyan eyes"
            />
            {/* Overlay for Cybernetic Accents */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-4 h-1 bg-secondary/60 blur-sm animate-pulse" />
          </div>
        </div>
      </div>
      
      {/* Decorative Particle Sparkles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <Sparkles className="absolute top-[15%] left-[25%] w-4 h-4 text-primary opacity-40 animate-pulse" />
        <Sparkles className="absolute bottom-[25%] right-[20%] w-6 h-6 text-secondary opacity-30 animate-pulse-soft" />
        <Sparkles className="absolute top-[60%] right-[35%] w-3 h-3 text-purple-400 opacity-20 animate-bounce" />
      </div>
    </div>
  );
}
