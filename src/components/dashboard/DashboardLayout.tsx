
import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Upload, LayoutDashboard, Image, User, Settings, LogOut, Menu, X } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  
  const navigationItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Upload", icon: Upload, path: "/dashboard/upload" },
    { name: "Models", icon: Image, path: "/dashboard/models" },
    { name: "Profile", icon: User, path: "/dashboard/profile" },
    { name: "Settings", icon: Settings, path: "/dashboard/settings" },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Sidebar for mobile */}
      <div 
        className={`${
          sidebarOpen ? "fixed inset-0 z-40 flex" : "hidden"
        } md:hidden`}
      >
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75"
          onClick={() => setSidebarOpen(false)}
        ></div>
        
        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          
          <div className="px-4 flex items-center">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pixmesh-400 to-pixmesh-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="ml-2 font-bold text-xl text-pixmesh-950">PixMesh</span>
          </div>
          
          <Separator className="my-4" />
          
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  isActive(item.path)
                    ? "bg-pixmesh-50 text-pixmesh-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon
                  className={`${
                    isActive(item.path) ? "text-pixmesh-500" : "text-gray-400 group-hover:text-gray-500"
                  } mr-4 flex-shrink-0 h-6 w-6`}
                />
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="px-2 mt-6 mb-2">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              onClick={() => {
                // Sign out handling
                window.location.href = "/";
              }}
            >
              <LogOut className="mr-4 h-5 w-5" />
              Sign out
            </Button>
          </div>
        </div>
      </div>
      
      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200">
            <div className="flex items-center h-16 flex-shrink-0 px-4 bg-white">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pixmesh-400 to-pixmesh-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="ml-2 font-bold text-xl text-pixmesh-950">PixMesh</span>
            </div>
            
            <div className="flex-1 flex flex-col overflow-y-auto pt-5 pb-4 bg-white">
              <nav className="flex-1 px-2 space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`${
                      isActive(item.path)
                        ? "bg-pixmesh-50 text-pixmesh-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                  >
                    <item.icon
                      className={`${
                        isActive(item.path) ? "text-pixmesh-500" : "text-gray-400 group-hover:text-gray-500"
                      } mr-3 flex-shrink-0 h-5 w-5`}
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
              
              <div className="px-2 mt-6 mb-2">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  onClick={() => {
                    // Sign out handling
                    window.location.href = "/";
                  }}
                >
                  <LogOut className="mr-3 h-5 w-5" />
                  Sign out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200">
          <button
            type="button"
            className="md:hidden px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pixmesh-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                {navigationItems.find(item => isActive(item.path))?.name || "Dashboard"}
              </h1>
            </div>
            
            <div className="ml-4 flex items-center md:ml-6">
              <div className="flex items-center">
                <div className="flex flex-col items-end mr-3">
                  <span className="text-sm font-medium text-gray-700">John Doe</span>
                  <span className="text-xs text-gray-500">john@example.com</span>
                </div>
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                  JD
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
