
import { TrendingUp, DollarSign, Target, Award } from "lucide-react";
import { AnalysisData } from "@/pages/Index";

interface ViralityScoreProps {
  data: AnalysisData;
}

export const ViralityScore = ({ data }: ViralityScoreProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return "Excelente";
    if (score >= 80) return "Muito Bom";
    if (score >= 70) return "Bom";
    if (score >= 60) return "Regular";
    return "Precisa Melhorar";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Potencial Viral */}
      <div className="glass p-6 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <TrendingUp className="h-6 w-6 text-purple-400" />
          </div>
          <span className="text-white/60 text-sm">Potencial Viral</span>
        </div>
        <div className="space-y-2">
          <div className={`text-3xl font-bold ${getScoreColor(data.viralPotential)}`}>
            {data.viralPotential}%
          </div>
          <div className="text-white/70 text-sm">
            {getScoreLabel(data.viralPotential)}
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${data.viralPotential}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Potencial de Vendas */}
      <div className="glass p-6 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-green-500/20 rounded-lg">
            <DollarSign className="h-6 w-6 text-green-400" />
          </div>
          <span className="text-white/60 text-sm">Potencial Vendas</span>
        </div>
        <div className="space-y-2">
          <div className={`text-3xl font-bold ${getScoreColor(data.salesPotential)}`}>
            {data.salesPotential}%
          </div>
          <div className="text-white/70 text-sm">
            {getScoreLabel(data.salesPotential)}
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${data.salesPotential}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Qualidade Visual */}
      <div className="glass p-6 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Target className="h-6 w-6 text-blue-400" />
          </div>
          <span className="text-white/60 text-sm">Qualidade Visual</span>
        </div>
        <div className="space-y-2">
          <div className={`text-3xl font-bold ${getScoreColor(data.visualAnalysis.quality)}`}>
            {data.visualAnalysis.quality}%
          </div>
          <div className="text-white/70 text-sm">
            {getScoreLabel(data.visualAnalysis.quality)}
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${data.visualAnalysis.quality}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Clareza do Áudio */}
      <div className="glass p-6 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-orange-500/20 rounded-lg">
            <Award className="h-6 w-6 text-orange-400" />
          </div>
          <span className="text-white/60 text-sm">Clareza Áudio</span>
        </div>
        <div className="space-y-2">
          <div className={`text-3xl font-bold ${getScoreColor(data.audioAnalysis.clarity)}`}>
            {data.audioAnalysis.clarity}%
          </div>
          <div className="text-white/70 text-sm">
            {getScoreLabel(data.audioAnalysis.clarity)}
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${data.audioAnalysis.clarity}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
