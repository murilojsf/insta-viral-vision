
import { VideoUpload } from "@/components/VideoUpload";
import { AnalysisDashboard } from "@/components/AnalysisDashboard";
import { ViralityScore } from "@/components/ViralityScore";
import { Header } from "@/components/Header";
import { useState } from "react";

export interface AnalysisData {
  viralPotential: number;
  salesPotential: number;
  visualAnalysis: {
    objects: string[];
    emotions: string[];
    quality: number;
    faces: number;
  };
  audioAnalysis: {
    sentiment: string;
    clarity: number;
    music: boolean;
    transcription: string;
  };
  recommendations: string[];
}

const Index = () => {
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleVideoUpload = async (file: File) => {
    setIsAnalyzing(true);
    
    // Simular análise de IA (em produção, isso seria enviado para um backend)
    setTimeout(() => {
      const mockAnalysis: AnalysisData = {
        viralPotential: Math.floor(Math.random() * 40 + 60), // 60-100%
        salesPotential: Math.floor(Math.random() * 30 + 70), // 70-100%
        visualAnalysis: {
          objects: ["pessoa", "produto", "smartphone", "fundo profissional"],
          emotions: ["alegria", "confiança", "entusiasmo"],
          quality: Math.floor(Math.random() * 20 + 80),
          faces: Math.floor(Math.random() * 3 + 1)
        },
        audioAnalysis: {
          sentiment: "positivo",
          clarity: Math.floor(Math.random() * 15 + 85),
          music: Math.random() > 0.5,
          transcription: "Olá pessoal! Hoje vou mostrar esse produto incrível que vai revolucionar sua rotina..."
        },
        recommendations: [
          "Adicione mais close-ups do produto",
          "Use hashtags trending do seu nicho",
          "Inclua uma call-to-action mais clara",
          "Considere adicionar legendas",
          "Poste nos horários de maior engajamento"
        ]
      };
      
      setAnalysisData(mockAnalysis);
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        {!analysisData ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-white mb-4">
                IA para Análise de Vídeos
                <br />
                <span className="gradient-text">Instagram</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Descubra o potencial viral e de vendas dos seus vídeos com nossa IA avançada
              </p>
            </div>
            
            <VideoUpload 
              onUpload={handleVideoUpload} 
              isAnalyzing={isAnalyzing}
            />
          </div>
        ) : (
          <div className="space-y-8">
            <ViralityScore data={analysisData} />
            <AnalysisDashboard data={analysisData} />
            
            <div className="text-center">
              <button
                onClick={() => setAnalysisData(null)}
                className="glass text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                Analisar Novo Vídeo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
