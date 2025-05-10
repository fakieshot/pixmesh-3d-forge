
export function Testimonials() {
  const testimonials = [
    {
      content: "PixMesh transformed our product pages. Our customers spend more time interacting with our products, and we've seen a 35% increase in conversion rates since implementing 3D models.",
      author: "Sarah Johnson",
      title: "E-commerce Manager, Fashion Retailer",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      content: "The quality of the 3D models is outstanding. What used to take our team days to create now happens in minutes with PixMesh. It's a game-changer for our catalog management.",
      author: "Michael Chen",
      title: "Product Director, Home Goods Brand",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      content: "As a small jewelry business, we couldn't afford professional 3D modeling before. PixMesh levels the playing field, allowing us to compete with much larger brands.",
      author: "Emma Rodriguez",
      title: "Owner, Handcrafted Jewelry",
      image: "https://randomuser.me/api/portraits/women/22.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-pixmesh-950 mb-4">Trusted by E-commerce Leaders</h2>
          <p className="text-lg text-gray-600">
            See how businesses are transforming their online shopping experience with PixMesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-pixmesh-950">{testimonial.author}</h4>
                  <p className="text-xs text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">★</span>
                ))}
              </div>
              
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="bg-gradient-to-r from-pixmesh-100 to-purple-100 rounded-2xl p-10 md:p-12 max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pixmesh-400 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7L7 7M20 7L11 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M20 17H17M4 17H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 12H13M20 12H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M10 17C10 18.6569 8.65685 20 7 20C5.34315 20 4 18.6569 4 17C4 15.3431 5.34315 14 7 14C8.65685 14 10 15.3431 10 17Z" stroke="white" strokeWidth="2" />
                  <path d="M20 17C20 18.6569 18.6569 20 17 20C15.3431 20 14 18.6569 14 17C14 15.3431 15.3431 14 17 14C18.6569 14 20 15.3431 20 17Z" stroke="white" strokeWidth="2" />
                  <path d="M14 7C14 8.65685 15.3431 10 17 10C18.6569 10 20 8.65685 20 7C20 5.34315 18.6569 4 17 4C15.3431 4 14 5.34315 14 7Z" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-pixmesh-950 mb-4">Ready to transform your product experience?</h3>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                Join thousands of businesses already using PixMesh to create stunning 3D models and boost their sales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/register" 
                  className="bg-pixmesh-400 hover:bg-pixmesh-500 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Start Free Trial
                </a>
                <a 
                  href="/contact" 
                  className="border border-pixmesh-400 text-pixmesh-500 hover:bg-pixmesh-50 px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
