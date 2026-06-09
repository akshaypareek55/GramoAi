
import Link from "next/link";
import { Rocket, Twitter, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Rocket className="w-6 h-6 text-primary" />
              <span className="font-headline font-bold text-2xl text-gradient">GramoAI</span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering creators and professionals with the best AI tools and knowledge. The future is intelligent.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-6">Directory</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/tools" className="hover:text-primary transition-colors">AI Tools</Link></li>
              <li><Link href="/prompts" className="hover:text-primary transition-colors">Prompt Library</Link></li>
              <li><Link href="/battles" className="hover:text-primary transition-colors">AI Battles</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Recent News</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/earn" className="hover:text-primary transition-colors">Earning Guides</Link></li>
              <li><Link href="/prompts" className="hover:text-primary transition-colors">Optimizer</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="/dashboard" className="hover:text-primary transition-colors">Creator Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-6">Newsletter</h4>
            <p className="text-muted-foreground mb-4">Stay updated with the latest AI trends.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-primary/50"
              />
              <button className="bg-primary p-2 rounded-lg text-primary-foreground">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 GramoAI. Built for the future.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
