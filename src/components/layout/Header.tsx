
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pixmesh-400 to-pixmesh-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="font-bold text-xl text-pixmesh-950">PixMesh</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/#features" className="text-gray-600 hover:text-pixmesh-500 transition-colors">Features</Link>
          <Link to="/#pricing" className="text-gray-600 hover:text-pixmesh-500 transition-colors">Pricing</Link>
          <Link to="/#testimonials" className="text-gray-600 hover:text-pixmesh-500 transition-colors">Testimonials</Link>
          <Link to="/login" className="text-gray-700 font-medium hover:text-pixmesh-600 transition-colors">Log in</Link>
          <Button asChild className="bg-pixmesh-400 hover:bg-pixmesh-500">
            <Link to="/register">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600" 
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-2 animate-fade-in">
          <nav className="flex flex-col gap-4 py-4">
            <Link 
              to="/#features" 
              className="text-gray-600 hover:text-pixmesh-500 py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/#pricing" 
              className="text-gray-600 hover:text-pixmesh-500 py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/#testimonials" 
              className="text-gray-600 hover:text-pixmesh-500 py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/login" 
              className="text-gray-700 font-medium hover:text-pixmesh-600 py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Log in
            </Link>
            <Button asChild className="bg-pixmesh-400 hover:bg-pixmesh-500 w-full mt-2">
              <Link 
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
