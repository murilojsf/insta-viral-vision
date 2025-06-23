
import { Upload, Video, Sparkles } from "lucide-react";
import { useRef } from "react";

interface VideoUploadProps {
  onUpload: (file: File) => void;
  isAnalyzing: boolean;
}

export const VideoUpload = ({ onUpload, isAnalyzing }: VideoUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      onUpload(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  if (isAnalyzing) {
    return (
      <div className="glass p-8 rounded-2xl max-w-md mx-auto text-center">
        <div className="animate-spin w-16 h-16 border-4 border-white/30 border-t-white rounded-full mx-auto mb-4"></div>
        <h3 className="text-xl font-semibold text-white mb-2">Analisando vídeo...</h3>
        <p className="text-white/70">Nossa IA está processando seu conteúdo</p>
        <div className="mt-4 space-y-2 text-sm text-white/60">
          <div className="flex items-center justify-center space-x-2">
            <Sparkles className="h-4 w-4" />
            <span>Analisando elementos visuais</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Sparkles className="h-4 w-4" />
            <span>Processando áudio</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Sparkles className="h-4 w-4" />
            <span>Calculando potencial viral</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        onChange={handleFileSelect}
        className="hidden"
      />
      
      <div 
        onClick={handleClick}
        className="glass p-8 rounded-2xl cursor-pointer hover:bg-white/20 transition-all duration-300 group float"
      >
        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 glass rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Upload className="h-8 w-8 text-white" />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Faça Upload do Vídeo
            </h3>
            <p className="text-white/70 text-sm">
              Arraste e solte ou clique para selecionar
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-white/60 text-xs">
            <Video className="h-4 w-4" />
            <span>MP4, MOV, AVI até 100MB</span>
          </div>
        </div>
      </div>
    </div>
  );
};
