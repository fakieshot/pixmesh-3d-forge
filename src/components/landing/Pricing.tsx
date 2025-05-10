
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Pricing() {
  const plans = [
    {
      name: "Free",
      description: "Perfect for trying out the platform",
      price: "$0",
      period: "forever",
      features: [
        "5 3D model exports per month",
        "Basic editing tools",
        "Standard quality exports",
        "Email support",
        "Public model gallery"
      ],
      buttonText: "Start Free",
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "Pro",
      description: "For small to medium businesses",
      price: "$29",
      period: "per month",
      features: [
        "50 3D model exports per month",
        "Advanced editing tools",
        "High quality exports",
        "Priority email support",
        "Private model gallery",
        "Download in multiple formats",
        "Team collaboration (1 team member)"
      ],
      buttonText: "Get Started",
      buttonVariant: "default",
      popular: true
    },
    {
      name: "Business",
      description: "For larger teams and businesses",
      price: "$99",
      period: "per month",
      features: [
        "Unlimited 3D model exports",
        "Premium editing tools",
        "Maximum quality exports",
        "24/7 phone and email support",
        "Private model gallery",
        "Download in all formats",
        "Team collaboration (5 team members)",
        "API access",
        "Custom branding"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-pixmesh-950 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600">
            Choose the plan that best fits your needs. All plans come with a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all ${
                plan.popular ? 'ring-2 ring-pixmesh-400 scale-105 md:scale-105' : 'border border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="bg-pixmesh-400 text-white text-center py-1.5 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-pixmesh-950 mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-pixmesh-950">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                
                <Button 
                  asChild
                  className={`w-full mb-6 ${
                    plan.buttonVariant === 'default' ? 'bg-pixmesh-400 hover:bg-pixmesh-500' : ''
                  }`}
                  variant={plan.buttonVariant as "outline" | "default"}
                >
                  <Link to="/register">{plan.buttonText}</Link>
                </Button>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-pixmesh-400 mr-2 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            All plans include a 14-day free trial. No credit card required to start.
          </p>
        </div>
      </div>
    </section>
  );
}
