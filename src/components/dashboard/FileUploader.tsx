
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function FileUploader() {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState<Record<string, number>>({});
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      handleFiles(selectedFiles);
    }
  };

  const handleFiles = (newFiles: File[]) => {
    // Filter for image and video files
    const validFiles = newFiles.filter(file => 
      file.type.startsWith("image/") || file.type.startsWith("video/")
    );
    
    if (validFiles.length !== newFiles.length) {
      toast({
        title: "Invalid file type",
        description: "Only images and videos are supported.",
        variant: "destructive",
      });
    }
    
    if (validFiles.length > 0) {
      setFiles(prev => [...prev, ...validFiles]);
      
      // Initialize progress for each file
      const newProgress: Record<string, number> = {...progress};
      validFiles.forEach(file => {
        newProgress[file.name] = 0;
      });
      setProgress(newProgress);
      
      // Simulate upload progress
      simulateFileUpload(validFiles);
    }
  };

  const simulateFileUpload = (filesToUpload: File[]) => {
    filesToUpload.forEach(file => {
      const interval = setInterval(() => {
        setProgress(prev => {
          const current = prev[file.name] || 0;
          
          if (current >= 100) {
            clearInterval(interval);
            toast({
              title: "File uploaded",
              description: `${file.name} has been uploaded successfully.`,
            });
            return prev;
          }
          
          return {
            ...prev,
            [file.name]: Math.min(current + Math.random() * 10, 100)
          };
        });
      }, 300);
    });
  };

  const removeFile = (fileToRemove: File) => {
    setFiles(files.filter(file => file !== fileToRemove));
    setProgress(prev => {
      const newProgress = {...prev};
      delete newProgress[fileToRemove.name];
      return newProgress;
    });
  };

  return (
    <div className="space-y-6">
      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          isDragging 
            ? "border-pixmesh-400 bg-pixmesh-50" 
            : "border-gray-300 hover:border-pixmesh-300 hover:bg-gray-50"
        } transition-colors`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center py-6">
          <div className="mb-4 w-16 h-16 rounded-full bg-pixmesh-50 flex items-center justify-center">
            <Upload className="h-8 w-8 text-pixmesh-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            Drag & drop files here
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            or click to browse from your computer
          </p>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            multiple
            accept="image/*,video/*"
            className="sr-only"
            onChange={handleFileInput}
          />
          <label htmlFor="file-upload">
            <Button 
              variant="outline" 
              className="border-pixmesh-400 text-pixmesh-500 hover:bg-pixmesh-50"
              type="button"
            >
              Select Files
            </Button>
          </label>
          <p className="text-xs text-gray-400 mt-4">
            Supported formats: JPG, PNG, GIF, MP4, MOV
          </p>
        </div>
      </div>
      
      {files.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-sm font-medium text-gray-700">Files ({files.length})</h3>
          </div>
          
          <div className="divide-y divide-gray-200">
            {files.map((file, index) => (
              <div key={index} className="px-6 py-4 flex items-center">
                <div className="w-10 h-10 flex-shrink-0 bg-gray-100 rounded flex items-center justify-center mr-4">
                  {file.type.startsWith("image/") ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB • {file.type.split("/")[1].toUpperCase()}
                  </p>
                </div>
                
                <div className="ml-4 w-32">
                  <Progress value={progress[file.name] || 0} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1 text-right">
                    {Math.round(progress[file.name] || 0)}%
                  </p>
                </div>
                
                <button 
                  type="button" 
                  onClick={() => removeFile(file)}
                  className="ml-4 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
          
          <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
            <span className="text-sm text-gray-500">
              {files.length} file{files.length !== 1 ? "s" : ""} selected
            </span>
            <Button 
              variant="default" 
              size="sm" 
              className="bg-pixmesh-400 hover:bg-pixmesh-500"
            >
              Process All Files
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
