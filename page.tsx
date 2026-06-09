
import { Robot3D } from "@/components/robot-3d";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowRight, 
  Search, 
  Zap, 
  Cpu, 
  Globe, 
  Star, 
  Layers, 
  Award,
  ExternalLink,
  Flame,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const trendingTools = [
  { id: "ai-tool-gpt", name: "ChatGPT", category: "Writing", rating: 4.9, color: "primary", trending: true },
  { id: "ai-tool-claude", name: "Claude", category: "Reasoning", rating: 4.8, color: "secondary", trending: true },
  { id: "ai-tool-gemini", name: "Gemini", category: "Multi-modal", rating: 4.7, color: "blue-400", trending: false },
  { id: "ai-tool-runway", name: "Runway", category: "Video", rating: 4.7, color: "purple-400", trending: true },
  { id: "ai-tool-perplexity", name: "Perplexity", category: "Search", rating: 4.8, color: "emerald-400", trending: false },
];

export default function Home() {
  const popularTags = ["ChatGPT", "Claude", "Gemini", "Midjourney", "Runway"];

  return (
    <div className="flex flex-col overflow-hidden bg-[#050816]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 lg:pt-0 overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(57,255,20,0.08)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(0,245,255,0.08)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div className="space-y-12 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] animate-pulse-soft">
              <Globe className="w-3 h-3" />
              India's Fastest Growing AI Hub
            </div>
            
            <div className="space-y-6">
              <h1 className="font-headline font-bold text-6xl md:text-[5.5rem] leading-[1] tracking-tight text-white">
                Discover. Learn.<br />
                <span className="text-gradient">Grow with AI.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-medium">
                Unlock the full potential of artificial intelligence. Master elite 
                tools, access exclusive prompts, and build your future in the AI economy.
              </p>
            </div>
            
            <div className="space-y-8 max-w-lg">
              <div className="relative group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input 
                  placeholder="Search for tools or prompts..." 
                  className="h-16 pl-14 pr-6 bg-white/5 border-white/10 rounded-2xl text-lg focus:ring-primary/50 group-hover:border-primary/30 transition-all placeholder:text-muted-foreground/50"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Trending:</span>
                {popularTags.map((tag) => (
                  <Link key={tag} href="/tools">
                    <Badge variant="outline" className="px-5 py-2 rounded-full border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-pointer text-[10px] font-bold uppercase tracking-wider">
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link href="/tools" className="w-full sm:w-auto">
                <Button size="lg" className="h-16 px-12 bg-primary text-primary-foreground hover:bg-primary/90 neon-glow-primary rounded-2xl font-bold text-lg group w-full">
                  Explore AI Tools <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/prompts" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="h-16 px-12 glass border-white/10 hover:bg-white/5 rounded-2xl font-bold text-lg w-full">
                  View Top Prompts
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Robot Visualizer */}
          <div className="relative order-first lg:order-last">
            <Robot3D />
          </div>
        </div>
      </section>

      {/* High-Fidelity Stats Section */}
      <section className="max-w-7xl mx-auto px-4 w-full -mt-24 relative z-20 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10 md:p-14 glass rounded-[4rem] border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#050816]/90 backdrop-blur-[40px]">
          <div className="space-y-3 text-center border-r border-white/5 last:border-0 group">
            <div className="text-4xl md:text-5xl font-headline font-bold text-primary group-hover:scale-110 transition-transform">100+</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-black">AI Tools</div>
          </div>
          <div className="space-y-3 text-center border-r border-white/5 last:border-0 group">
            <div className="text-4xl md:text-5xl font-headline font-bold text-secondary group-hover:scale-110 transition-transform">500+</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-black">Prompts</div>
          </div>
          <div className="space-y-3 text-center border-r border-white/5 last:border-0 group">
            <div className="text-4xl md:text-5xl font-headline font-bold text-white group-hover:scale-110 transition-transform">50+</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-black">Guides</div>
          </div>
          <div className="space-y-3 text-center border-r border-white/5 last:border-0 group">
            <div className="text-4xl md:text-5xl font-headline font-bold text-primary group-hover:scale-110 transition-transform">10K+</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-black">Users</div>
          </div>
        </div>
      </section>

      {/* Trending Models Directory Section */}
      <section className="max-w-7xl mx-auto px-4 w-full py-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-widest">
              <Flame className="w-3.5 h-3.5" /> High Performance
            </div>
            <h2 className="text-5xl md:text-7xl font-headline font-bold text-white tracking-tighter">
              Trending <span className="text-gradient">AI Models</span>
            </h2>
          </div>
          <Link href="/tools">
            <Button variant="outline" className="glass border-white/10 rounded-2xl h-14 px-10 font-bold hover:bg-white/5">
              Browse Directory
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {trendingTools.map((tool) => (
            <div key={tool.id} className="group relative glass p-7 rounded-[2.5rem] border-white/5 hover:border-primary/40 transition-all duration-700 hover:-translate-y-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 space-y-6">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image 
                    src={PlaceHolderImages.find(img => img.id === tool.id)?.imageUrl || "https://picsum.photos/seed/tool/400/300"} 
                    alt={tool.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    data-ai-hint="ai tool interface"
                  />
                  {tool.trending && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-[8px] font-black uppercase rounded-full shadow-lg">
                      Hot
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-headline font-bold text-white group-hover:text-primary transition-colors">{tool.name}</h3>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mt-1">{tool.category}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-1.5 text-sm font-black text-yellow-500">
                    <Star className="w-4 h-4 fill-yellow-500" /> {tool.rating}
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mastery Section */}
      <section className="max-w-7xl mx-auto px-4 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" /> Integrated Ecosystem
            </div>
            <h2 className="text-5xl md:text-7xl font-headline font-bold leading-[1] text-white tracking-tighter">
              A Smarter Way to <br />
              <span className="text-secondary">Master AI.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              We provide a curated, high-fidelity directory of over 100 AI tools, 
              expert-crafted prompt engineering labs, and step-by-step monetization 
              guides for the modern creator.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Award, title: "Verified Assets", desc: "Every tool and prompt is tested for real-world reliability.", color: "secondary" },
                { icon: CheckCircle2, title: "Expert Support", desc: "Access the community of top-tier AI engineers.", color: "primary" }
              ].map((feature, idx) => (
                <div key={idx} className="glass p-8 rounded-3xl border-white/5 space-y-4 group hover:border-white/20 transition-all">
                  <feature.icon className={`w-8 h-8 text-${feature.color} group-hover:scale-110 transition-transform`} />
                  <h4 className="text-xl font-bold text-white">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-secondary/20 blur-[150px] rounded-full group-hover:bg-secondary/30 transition-all duration-1000" />
            <div className="relative glass p-5 rounded-[4rem] border-white/10 overflow-hidden transform group-hover:rotate-1 transition-transform duration-700 shadow-2xl">
               <Image 
                src="https://picsum.photos/seed/dashboard-p-1/1200/800" 
                alt="AI Platform Dashboard" 
                width={800} 
                height={500} 
                className="rounded-[3rem] object-cover grayscale-[0.2] brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                data-ai-hint="futuristic software interface"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA Section */}
      <section className="max-w-7xl mx-auto px-4 w-full py-48">
        <div className="relative rounded-[5rem] overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 z-0 animate-pulse-soft" />
          <div className="relative glass border-white/5 z-10 p-20 md:p-36 flex flex-col items-center text-center space-y-12 backdrop-blur-[60px]">
            <h2 className="text-6xl md:text-[6.5rem] font-headline font-bold leading-[0.9] text-white tracking-tighter">
              Join the <br /><span className="text-gradient">AI Elite.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl font-medium leading-relaxed">
              The AI revolution isn't coming—it's here. Secure your spot among the builders, creators, and innovators of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="h-18 px-16 bg-primary text-primary-foreground hover:bg-primary/90 neon-glow-primary rounded-2xl text-2xl font-black group">
                  Start for Free
                </Button>
              </Link>
              <Link href="/tools" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="h-18 px-16 glass border-white/10 rounded-2xl text-2xl font-black hover:bg-white/5">
                  Our Roadmap
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
