
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Download, Share, Settings, ArrowLeft, ArrowRight, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// This is a mock ThreeJS viewer since we're not actually implementing Three.js here
export function ThreeJsViewer() {
  const [rotation, setRotation] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [zoom, setZoom] = useState(1);
  const { toast } = useToast();

  // Auto-rotation effect
  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, [autoRotate]);

  const handleDownload = (format: string) => {
    toast({
      title: `Downloading model as ${format}`,
      description: "Your download will begin shortly",
    });
  };

  const handleShare = () => {
    // Copy share link to clipboard
    navigator.clipboard.writeText("https://app.pixmesh.com/share/demo-product");
    
    toast({
      title: "Share link copied",
      description: "Link has been copied to clipboard",
    });
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h3 className="font-medium text-gray-900">Product Sneaker v1</h3>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button 
            size="sm" 
            variant="outline" 
            className="text-xs"
            onClick={() => handleDownload("glb")}
          >
            <Download className="mr-1 h-3.5 w-3.5" />
            Download
          </Button>
          
          <Button 
            size="sm" 
            variant="outline"
            className="text-xs"
            onClick={handleShare}
          >
            <Share className="mr-1 h-3.5 w-3.5" />
            Share
          </Button>
          
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-3">
          <div className="aspect-square bg-gradient-to-br from-gray-100 to-white relative">
            {/* This would be replaced with an actual Three.js canvas */}
            <div 
              className="w-full h-full flex items-center justify-center" 
              style={{ transform: `scale(${zoom})` }}
            >
              <div 
                className="w-1/2 h-1/2 bg-pixmesh-100 rounded-xl" 
                style={{ transform: `rotateY(${rotation}deg)` }}
              >
                <div 
                  className="w-full h-full flex items-center justify-center"
                  style={{ transform: `rotateY(${180}deg)` }}
                >
                  <span className="text-pixmesh-500 font-bold">3D Model</span>
                </div>
              </div>
            </div>
            
            {/* Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={() => setZoom(prev => Math.max(0.5, prev - 0.1))}
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              
              <div className="w-24">
                <Slider
                  value={[zoom * 100]}
                  min={50}
                  max={150}
                  step={1}
                  onValueChange={(val) => setZoom(val[0] / 100)}
                />
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={() => setZoom(prev => Math.min(1.5, prev + 0.1))}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              
              <div className="w-px h-5 bg-gray-300 mx-1"></div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className={`h-8 w-8 ${autoRotate ? 'text-pixmesh-500 bg-pixmesh-50' : ''}`}
                onClick={() => setAutoRotate(!autoRotate)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 16L16 12L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={() => toast({
                  title: "Fullscreen mode",
                  description: "Model is now in fullscreen mode.",
                })}
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-l border-gray-200">
          <Tabs defaultValue="info">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="info">Info</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="info" className="p-4 space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Model Details</h4>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Created</span>
                    <span className="text-gray-900">May 5, 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Size</span>
                    <span className="text-gray-900">4.2 MB</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Polygons</span>
                    <span className="text-gray-900">24,567</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Formats</span>
                    <span className="text-gray-900">GLB, FBX</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-900">Source Files</h4>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between text-sm p-2 bg-gray-50 rounded-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded mr-2"></div>
                      <span className="text-gray-900">product-front.jpg</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm p-2 bg-gray-50 rounded-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded mr-2"></div>
                      <span className="text-gray-900">product-side.jpg</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="settings" className="p-4 space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Display Options</h4>
                <div className="mt-2 space-y-3">
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Background Color</label>
                    <div className="grid grid-cols-5 gap-2">
                      {['#FFFFFF', '#F3F4F6', '#000000', '#E8F4FF', '#FDF2F8'].map(color => (
                        <button key={color} className="w-8 h-8 rounded-full border border-gray-300" style={{ backgroundColor: color }}></button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Lighting</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Soft', 'Neutral', 'Bright'].map(option => (
                        <button 
                          key={option}
                          className={`py-1 px-2 text-xs rounded ${
                            option === 'Neutral' 
                              ? 'bg-pixmesh-50 text-pixmesh-600 font-medium'
                              : 'bg-gray-50 text-gray-600'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Rotation Speed</label>
                    <Slider
                      value={[50]}
                      min={0}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-900">Export Settings</h4>
                <div className="mt-2 space-y-3">
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Quality</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Low', 'Medium', 'High'].map(option => (
                        <button 
                          key={option}
                          className={`py-1 px-2 text-xs rounded ${
                            option === 'High' 
                              ? 'bg-pixmesh-50 text-pixmesh-600 font-medium'
                              : 'bg-gray-50 text-gray-600'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Texture Size</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['1K', '2K', '4K'].map(option => (
                        <button 
                          key={option}
                          className={`py-1 px-2 text-xs rounded ${
                            option === '2K' 
                              ? 'bg-pixmesh-50 text-pixmesh-600 font-medium'
                              : 'bg-gray-50 text-gray-600'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
