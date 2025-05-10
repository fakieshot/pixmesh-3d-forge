
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { ModelCard } from "@/components/dashboard/ModelCard";
import { Upload } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const mockModels = [
    {
      id: "1",
      name: "Product Sneaker",
      thumbnail: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      status: "completed" as const,
      createdAt: "2025-05-01T12:00:00Z",
      formats: ["GLB", "FBX", "USDZ"],
    },
    {
      id: "2",
      name: "Watch Pro",
      thumbnail: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      status: "completed" as const,
      createdAt: "2025-04-28T15:30:00Z",
      formats: ["GLB", "FBX"],
    },
    {
      id: "3",
      name: "Headphones Elite",
      thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      status: "processing" as const,
      createdAt: "2025-05-09T09:15:00Z",
      formats: [],
    },
    {
      id: "4",
      name: "Vintage Lamp",
      thumbnail: "https://images.unsplash.com/photo-1543198453-75c232a8155c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      status: "failed" as const,
      createdAt: "2025-04-22T14:20:00Z",
      formats: [],
    }
  ];

  // Dashboard stats
  const stats = [
    {
      title: "Models Created",
      value: "24",
      change: "+8% from last month",
      increasing: true
    },
    {
      title: "Storage Used",
      value: "418 MB",
      change: "1.2 GB total limit",
      increasing: false
    },
    {
      title: "Processing Credits",
      value: "43",
      change: "57 credits remaining",
      increasing: false
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  {stat.title}
                </CardTitle>
                <svg
                  className={`h-4 w-4 ${stat.increasing ? "text-green-500" : "text-gray-500"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={stat.increasing ? "M5 10l7-7m0 0l7 7m-7-7v18" : ""}
                  />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Recent Models & Upload CTA */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Recent Models</h2>
          <Button asChild className="bg-pixmesh-400 hover:bg-pixmesh-500">
            <Link to="/dashboard/upload">
              <Upload className="mr-2 h-4 w-4" /> Upload New
            </Link>
          </Button>
        </div>
        
        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockModels.map(model => (
            <ModelCard key={model.id} {...model} />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center pt-4">
          <Button asChild variant="outline">
            <Link to="/dashboard/models">View All Models</Link>
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
