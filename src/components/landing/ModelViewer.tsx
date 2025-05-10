
import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";

export function ModelViewer() {
  const [rotation, setRotation] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  // Auto-rotation effect
  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, [autoRotate]);

  // Mock product options
  const products = [
    "Sneaker",
    "Watch",
    "Headphones",
    "Bag"
  ];
  
  const [selectedProduct, setSelectedProduct] = useState(0);

  return (
    <section id="demo" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-pixmesh-950 mb-4">See PixMesh in Action</h2>
          <p className="text-lg text-gray-600">
            Interact with these sample 3D models created with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-100 to-white rounded-2xl p-6 lg:p-10 shadow-lg aspect-square relative overflow-hidden">
            {/* This would be replaced with an actual 3D viewer */}
            <div 
              className="w-full h-full flex items-center justify-center" 
              style={{ transform: `rotateY(${rotation}deg)` }}
            >
              <div className="w-3/4 h-3/4 relative">
                <div 
                  className="absolute inset-0 bg-pixmesh-200 rounded-xl"
                  style={{ 
                    transform: `perspective(800px) rotateY(${rotation}deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                ></div>
                
                <div 
                  className="absolute left-0 top-0 w-full h-full flex items-center justify-center"
                  style={{ 
                    transform: `perspective(800px) rotateY(${rotation}deg) translateZ(20px)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <span className="text-2xl font-bold text-pixmesh-800">
                    {products[selectedProduct]}
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive controls */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <button 
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  autoRotate ? 'bg-pixmesh-400 text-white' : 'bg-gray-200 text-gray-600'
                }`}
                onClick={() => setAutoRotate(!autoRotate)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 16L16 12L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              
              <div className="w-24">
                <Slider
                  value={[rotation]}
                  min={0}
                  max={359}
                  step={1}
                  onValueChange={(val) => {
                    setRotation(val[0]);
                    setAutoRotate(false);
                  }}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-pixmesh-950 mb-4">Interactive 3D Product Viewer</h3>
            <p className="text-gray-600 mb-6">
              Engage your customers with interactive 3D models that they can rotate, zoom, and explore from every angle.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-3 w-6 h-6 rounded-full bg-pixmesh-100 flex items-center justify-center text-pixmesh-500 font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-pixmesh-950">Explore from Any Angle</h4>
                  <p className="text-sm text-gray-600">Customers can rotate and view products from all sides.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 w-6 h-6 rounded-full bg-pixmesh-100 flex items-center justify-center text-pixmesh-500 font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-pixmesh-950">Zoom in on Details</h4>
                  <p className="text-sm text-gray-600">See fine details with powerful zoom capabilities.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 w-6 h-6 rounded-full bg-pixmesh-100 flex items-center justify-center text-pixmesh-500 font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-pixmesh-950">Interactive Features</h4>
                  <p className="text-sm text-gray-600">Add hotspots to highlight key product features.</p>
                </div>
              </div>
            </div>
            
            {/* Sample product selector */}
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500 mb-3">Select a sample product:</p>
              <div className="grid grid-cols-4 gap-2">
                {products.map((product, index) => (
                  <button
                    key={index}
                    className={`p-3 rounded-lg text-sm ${
                      selectedProduct === index 
                        ? 'bg-pixmesh-400 text-white'
                        : 'bg-white border border-gray-200 text-gray-700 hover:border-pixmesh-300'
                    }`}
                    onClick={() => setSelectedProduct(index)}
                  >
                    {product}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
