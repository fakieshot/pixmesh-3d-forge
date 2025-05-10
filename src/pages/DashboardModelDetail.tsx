
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { ThreeJsViewer } from "@/components/dashboard/ThreeJsViewer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function DashboardModelDetail() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center mb-4">
          <Button asChild variant="ghost" size="sm" className="gap-1 pl-0 text-gray-500 hover:text-gray-700">
            <Link to="/dashboard/models">
              <ArrowLeft className="h-4 w-4" />
              Back to Models
            </Link>
          </Button>
        </div>
        
        {/* 3D Model Viewer */}
        <ThreeJsViewer />
        
        {/* Additional Information Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mt-8">
          <Tabs defaultValue="settings">
            <TabsList className="grid grid-cols-3 bg-gray-50 p-0 h-auto">
              <TabsTrigger 
                value="settings" 
                className="py-3 rounded-none border-r border-gray-200 data-[state=active]:bg-white data-[state=active]:border-b-0"
              >
                Export Settings
              </TabsTrigger>
              <TabsTrigger 
                value="embeddings" 
                className="py-3 rounded-none border-r border-gray-200 data-[state=active]:bg-white data-[state=active]:border-b-0"
              >
                Embed Options
              </TabsTrigger>
              <TabsTrigger 
                value="history" 
                className="py-3 rounded-none data-[state=active]:bg-white data-[state=active]:border-b-0"
              >
                Edit History
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="settings" className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-lg text-gray-900 mb-4">Export Settings</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
                      <div className="grid grid-cols-3 gap-2">
                        {["GLB", "FBX", "USDZ"].map(format => (
                          <button 
                            key={format}
                            className={`px-4 py-2 text-sm border rounded-md ${
                              format === "GLB" 
                                ? "bg-pixmesh-50 border-pixmesh-300 text-pixmesh-700" 
                                : "border-gray-300 hover:border-pixmesh-300"
                            }`}
                          >
                            {format}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Quality</label>
                      <div className="grid grid-cols-3 gap-2">
                        {["Low", "Medium", "High"].map(quality => (
                          <button 
                            key={quality}
                            className={`px-4 py-2 text-sm border rounded-md ${
                              quality === "High" 
                                ? "bg-pixmesh-50 border-pixmesh-300 text-pixmesh-700" 
                                : "border-gray-300 hover:border-pixmesh-300"
                            }`}
                          >
                            {quality}
                          </button>
                        ))}
                      </div>
                      <p className="mt-2 text-xs text-gray-500">
                        Higher quality increases file size but preserves more details.
                      </p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Texture Size</label>
                      <div className="grid grid-cols-3 gap-2">
                        {["1K", "2K", "4K"].map(size => (
                          <button 
                            key={size}
                            className={`px-4 py-2 text-sm border rounded-md ${
                              size === "2K" 
                                ? "bg-pixmesh-50 border-pixmesh-300 text-pixmesh-700" 
                                : "border-gray-300 hover:border-pixmesh-300"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="w-full bg-pixmesh-400 hover:bg-pixmesh-500">
                        Export Model
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg text-gray-900 mb-4">Optimization</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-700">Compress Textures</h4>
                        <p className="text-xs text-gray-500">Reduce file size with minimal quality loss</p>
                      </div>
                      <div className="flex items-center h-6">
                        <input id="compress" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-pixmesh-600" defaultChecked />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-700">Reduce Polygon Count</h4>
                        <p className="text-xs text-gray-500">Optimize geometry for web performance</p>
                      </div>
                      <div className="flex items-center h-6">
                        <input id="reduce-poly" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-pixmesh-600" defaultChecked />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-700">Draco Compression</h4>
                        <p className="text-xs text-gray-500">Advanced compression for GLB/GLTF</p>
                      </div>
                      <div className="flex items-center h-6">
                        <input id="draco" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-pixmesh-600" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-700">Generate Normal Maps</h4>
                        <p className="text-xs text-gray-500">Enhance surface detail perception</p>
                      </div>
                      <div className="flex items-center h-6">
                        <input id="normal-maps" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-pixmesh-600" defaultChecked />
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button variant="outline" className="w-full">
                        Apply & Preview Changes
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="embeddings" className="p-6">
              <div className="max-w-3xl mx-auto">
                <h3 className="font-medium text-lg text-gray-900 mb-2">Embed Your 3D Model</h3>
                <p className="text-gray-600 mb-6">
                  Use these options to easily add your 3D model to your website or e-commerce platform.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-3">HTML Embed Code</h4>
                    <div className="bg-gray-900 text-gray-100 p-3 rounded text-sm font-mono overflow-x-auto">
                      {'<iframe src="https://pixmesh.com/embed/model-123" width="100%" height="500" allowfullscreen></iframe>'}
                    </div>
                    <Button variant="outline" size="sm" className="mt-3">
                      Copy Code
                    </Button>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-3">Direct Link</h4>
                    <div className="bg-white border border-gray-200 rounded flex items-center p-2">
                      <span className="text-gray-500 text-sm flex-1 truncate">https://pixmesh.com/share/model-123</span>
                      <Button variant="ghost" size="sm">
                        Copy
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-3">Platform-specific Integration</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {["Shopify", "Etsy", "Amazon", "Wix", "WordPress", "Squarespace"].map(platform => (
                        <Button key={platform} variant="outline" className="justify-start">
                          {platform}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="history" className="p-6">
              <div className="max-w-3xl mx-auto">
                <h3 className="font-medium text-lg text-gray-900 mb-6">Model Edit History</h3>
                
                <div className="relative border-l-2 border-gray-200 pl-8 space-y-8">
                  {[
                    {
                      action: "Model Created",
                      date: "May 5, 2025 - 2:34 PM",
                      description: "Model generated from 8 product photos"
                    },
                    {
                      action: "Textures Optimized",
                      date: "May 5, 2025 - 2:40 PM",
                      description: "Automatic texture optimization applied"
                    },
                    {
                      action: "Material Edited",
                      date: "May 6, 2025 - 10:15 AM",
                      description: "Material properties adjusted for better reflectivity"
                    },
                    {
                      action: "Model Exported",
                      date: "May 6, 2025 - 10:22 AM",
                      description: "Exported as GLB and FBX formats"
                    }
                  ].map((event, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-10 w-6 h-6 rounded-full border-2 border-pixmesh-400 bg-white"></div>
                      <h4 className="font-medium text-gray-900">{event.action}</h4>
                      <p className="text-sm text-gray-500 mb-1">{event.date}</p>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  );
}
