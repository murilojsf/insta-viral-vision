
import { Brain, Instagram, BarChart3 } from "lucide-react";

export const Header = () => {
  return (
    <header className="glass border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 glass rounded-lg pulse-glow">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">VideoAI</h1>
              <p className="text-white/70 text-sm">Instagram Analytics</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-white/80">
              <Instagram className="h-5 w-5" />
              <span className="hidden md:inline">Instagram</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <BarChart3 className="h-5 w-5" />
              <span className="hidden md:inline">Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
