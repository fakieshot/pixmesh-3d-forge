
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from "@/components/ui/card";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Download, Share, MoreHorizontal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ModelCardProps {
  id: string;
  name: string;
  thumbnail: string;
  status: 'processing' | 'completed' | 'failed';
  createdAt: string;
  formats: string[];
}

export function ModelCard({ id, name, thumbnail, status, createdAt, formats }: ModelCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  const statusColors: Record<string, string> = {
    processing: "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800",
    failed: "bg-red-100 text-red-800"
  };

  const handleShare = () => {
    // Copy share link to clipboard
    navigator.clipboard.writeText(`https://app.pixmesh.com/share/${id}`);
    
    toast({
      title: "Share link copied",
      description: "Link has been copied to clipboard",
    });
  };

  const handleDownload = (format: string) => {
    toast({
      title: `Downloading model as ${format}`,
      description: "Your download will begin shortly",
    });
  };

  return (
    <Card 
      className="overflow-hidden transition-all duration-200 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-0 relative">
        <div className="aspect-square bg-gray-100 relative overflow-hidden">
          <img 
            src={thumbnail} 
            alt={name}
            className="w-full h-full object-cover"
          />
          
          {status === 'processing' && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="bg-white rounded-lg px-4 py-2 flex items-center">
                <svg className="animate-spin h-5 w-5 text-pixmesh-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-sm font-medium">Processing...</span>
              </div>
            </div>
          )}
          
          {isHovered && status === 'completed' && (
            <Link to={`/dashboard/models/${id}`} className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <Button className="bg-pixmesh-400 hover:bg-pixmesh-500">
                View Model
              </Button>
            </Link>
          )}
        </div>
        
        <Badge 
          variant="outline"
          className={`absolute top-3 left-3 ${statusColors[status]} border-0`}
        >
          {status === 'processing' ? 'Processing' : status === 'completed' ? 'Completed' : 'Failed'}
        </Badge>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-gray-900 truncate">{name}</h3>
            <p className="text-xs text-gray-500">{new Date(createdAt).toLocaleDateString()}</p>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => handleShare()}>
                <Share className="mr-2 h-4 w-4" /> Share
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  toast({
                    title: "Model deleted",
                    description: `${name} has been deleted.`,
                  });
                }}
                className="text-red-600"
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
        {status === 'completed' && formats.map(format => (
          <Button 
            key={format}
            variant="outline" 
            size="sm"
            onClick={() => handleDownload(format)}
            className="text-xs"
          >
            <Download className="mr-1 h-3.5 w-3.5" />
            {format}
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}
