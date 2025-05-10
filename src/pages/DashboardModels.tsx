
import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { ModelCard } from "@/components/dashboard/ModelCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Upload } from "lucide-react";
import { Link } from "react-router-dom";

export default function DashboardModels() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock data for models
  const allModels = [
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
    },
    {
      id: "5",
      name: "Coffee Maker",
      thumbnail: "https://images.unsplash.com/photo-1517122966011-0df2a11cb218?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      status: "completed" as const,
      createdAt: "2025-04-15T10:45:00Z",
      formats: ["GLB", "FBX"],
    },
    {
      id: "6",
      name: "Designer Chair",
      thumbnail: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      status: "completed" as const,
      createdAt: "2025-03-30T16:20:00Z",
      formats: ["GLB"],
    },
    {
      id: "7",
      name: "Plant Pot",
      thumbnail: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      status: "processing" as const,
      createdAt: "2025-05-08T11:30:00Z",
      formats: [],
    },
    {
      id: "8",
      name: "Wireless Earbuds",
      thumbnail: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      status: "completed" as const,
      createdAt: "2025-04-10T09:00:00Z",
      formats: ["GLB", "FBX"],
    }
  ];

  // Filter models based on search query and status
  const filteredModels = allModels.filter(model => {
    const matchesSearch = model.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || model.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search models..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-4 items-center">
            <Select 
              value={statusFilter} 
              onValueChange={setStatusFilter}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
            
            <Button asChild className="bg-pixmesh-400 hover:bg-pixmesh-500">
              <Link to="/dashboard/upload">
                <Upload className="mr-2 h-4 w-4" /> Upload
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Models count */}
        <div>
          <p className="text-sm text-gray-500">
            Showing {filteredModels.length} of {allModels.length} models
          </p>
        </div>
        
        {/* Models Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredModels.map(model => (
            <ModelCard key={model.id} {...model} />
          ))}
          
          {filteredModels.length === 0 && (
            <div className="col-span-full py-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No models found</h3>
              <p className="text-gray-500">
                {searchQuery 
                  ? `No models matching "${searchQuery}" with the selected filters.` 
                  : "No models found with the selected filters."}
              </p>
            </div>
          )}
        </div>
        
        {/* Pagination placeholder */}
        {filteredModels.length > 0 && (
          <div className="flex justify-center pt-8">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" size="icon" disabled>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>
              <Button variant="outline" size="sm" className="bg-pixmesh-50 text-pixmesh-600">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="icon">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
