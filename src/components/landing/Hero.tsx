
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-32 pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white z-0" aria-hidden="true" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-pixmesh-950 mb-6">
              <span className="block">Transform Your Products </span>
              <span className="bg-gradient-to-r from-pixmesh-600 to-pixmesh-400 bg-clip-text text-transparent">
                Into Stunning 3D Models
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Instantly convert product photos and videos into high-quality 3D models optimized for Shopify, Etsy, and Amazon. No 3D skills required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-pixmesh-400 hover:bg-pixmesh-500 text-white">
                <Link to="/register">
                  Start Scanning Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link to="/#demo">View Demo</Link>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                    {i}
                  </div>
                ))}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Trusted by 5,000+ businesses</p>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">5.0 (512 reviews)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-pixmesh-300/30 to-purple-300/30 rounded-3xl -rotate-2 scale-105 -z-10"></div>
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-pixmesh-100 to-white p-4 flex items-center justify-center">
                <div className="relative w-full max-w-xs mx-auto">
                  <div className="w-full h-52 bg-white rounded-lg shadow-lg p-4 rotate-3 animate-float">
                    <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-gray-400">
                      3D Model Preview
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white rounded-lg shadow-lg p-2 -rotate-6 animate-pulse-light">
                    <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">
                      Photo Input
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-white">
                <div className="h-2 bg-gray-200 rounded"></div>
                <div className="mt-3 h-2 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
