
import { Eye, Users, Music, MessageSquare, Lightbulb, Tag } from "lucide-react";
import { AnalysisData } from "@/pages/Index";

interface AnalysisDashboardProps {
  data: AnalysisData;
}

export const AnalysisDashboard = ({ data }: AnalysisDashboardProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Análise Visual */}
      <div className="glass p-6 rounded-xl">
        <div className="flex items-center space-x-2 mb-4">
          <Eye className="h-5 w-5 text-blue-400" />
          <h3 className="text-lg font-semibold text-white">Análise Visual</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-white/80 text-sm mb-2">Objetos Detectados</h4>
            <div className="flex flex-wrap gap-2">
              {data.visualAnalysis.objects.map((object, index) => (
                <span 
                  key={index}
                  className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs"
                >
                  {object}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white/80 text-sm mb-2">Emoções Identificadas</h4>
            <div className="flex flex-wrap gap-2">
              {data.visualAnalysis.emotions.map((emotion, index) => (
                <span 
                  key={index}
                  className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs"
                >
                  {emotion}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
            <span className="text-white/80">Rostos Detectados</span>
            <span className="text-white font-semibold">{data.visualAnalysis.faces}</span>
          </div>
        </div>
      </div>

      {/* Análise de Áudio */}
      <div className="glass p-6 rounded-xl">
        <div className="flex items-center space-x-2 mb-4">
          <Music className="h-5 w-5 text-green-400" />
          <h3 className="text-lg font-semibold text-white">Análise de Áudio</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
            <span className="text-white/80">Sentimento</span>
            <span className={`font-semibold ${
              data.audioAnalysis.sentiment === 'positivo' ? 'text-green-400' : 
              data.audioAnalysis.sentiment === 'negativo' ? 'text-red-400' : 'text-yellow-400'
            }`}>
              {data.audioAnalysis.sentiment}
            </span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
            <span className="text-white/80">Música de Fundo</span>
            <span className={`font-semibold ${data.audioAnalysis.music ? 'text-green-400' : 'text-red-400'}`}>
              {data.audioAnalysis.music ? 'Sim' : 'Não'}
            </span>
          </div>
          
          <div>
            <h4 className="text-white/80 text-sm mb-2">Transcrição (prévia)</h4>
            <div className="bg-white/10 p-3 rounded-lg">
              <p className="text-white/90 text-sm leading-relaxed">
                "{data.audioAnalysis.transcription}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recomendações */}
      <div className="glass p-6 rounded-xl lg:col-span-2">
        <div className="flex items-center space-x-2 mb-4">
          <Lightbulb className="h-5 w-5 text-yellow-400" />
          <h3 className="text-lg font-semibold text-white">Recomendações para Melhorar</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.recommendations.map((recommendation, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-white/10 rounded-lg">
              <div className="p-1 bg-yellow-500/20 rounded-full mt-1">
                <Tag className="h-3 w-3 text-yellow-400" />
              </div>
              <span className="text-white/90 text-sm">{recommendation}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
