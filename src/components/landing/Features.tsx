
import { ArrowRight, Upload, Clock, Download, Share } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Upload className="h-6 w-6 text-pixmesh-400" />,
      title: "Simple Upload",
      description: "Drag and drop photos or videos of your product. No special equipment or technical skills needed."
    },
    {
      icon: <Clock className="h-6 w-6 text-pixmesh-400" />,
      title: "Fast Processing",
      description: "Our AI transforms your uploads into high-quality 3D models in minutes, not hours or days."
    },
    {
      icon: <Download className="h-6 w-6 text-pixmesh-400" />,
      title: "Ready for E-commerce",
      description: "Download in .glb or .fbx formats, optimized for Shopify, Etsy, Amazon and other platforms."
    },
    {
      icon: <Share className="h-6 w-6 text-pixmesh-400" />,
      title: "Easy Sharing",
      description: "Generate shareable links to showcase your 3D models to clients and customers."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-pixmesh-950 mb-4">Transform Any Product Into 3D</h2>
          <p className="text-lg text-gray-600">
            Our advanced AI technology makes creating interactive 3D models simple and accessible for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-pixmesh-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-pixmesh-950 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-gradient-to-r from-pixmesh-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold text-pixmesh-950 mb-4">See the difference 3D makes</h3>
                <p className="text-gray-600 mb-8">
                  Products displayed in 3D see up to 40% higher conversion rates compared to static images. 
                  Enable your customers to interact with your products from every angle.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Increase conversion rates by up to 40%",
                    "Reduce product returns by 15-20%",
                    "Enhance customer engagement",
                    "Stand out from competitors"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="mr-2 flex-shrink-0 w-5 h-5 rounded-full bg-pixmesh-400 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <button className="mt-8 inline-flex items-center text-pixmesh-500 font-medium hover:text-pixmesh-600 transition-colors">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg p-4">
                  <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                    Interactive 3D Preview
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pixmesh-400 rounded-lg shadow-lg flex items-center justify-center text-white font-bold">
                  +40%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
