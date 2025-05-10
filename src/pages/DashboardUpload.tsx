
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { FileUploader } from "@/components/dashboard/FileUploader";
import { Card } from "@/components/ui/card";

export default function DashboardUpload() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Upload Files</h2>
          <p className="text-gray-600">
            Upload product photos or videos to convert into 3D models. For best results, include multiple angles of your product.
          </p>
        </div>
        
        <Card className="p-6">
          <FileUploader />
        </Card>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border border-gray-200 rounded-lg bg-white">
            <div className="w-10 h-10 rounded-full bg-pixmesh-100 flex items-center justify-center text-pixmesh-500 mb-4">
              1
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Upload Files</h3>
            <p className="text-sm text-gray-600">
              Upload 5+ photos showing your product from different angles or a 360° video.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg bg-white">
            <div className="w-10 h-10 rounded-full bg-pixmesh-100 flex items-center justify-center text-pixmesh-500 mb-4">
              2
            </div>
            <h3 className="font-medium text-gray-900 mb-2">AI Processing</h3>
            <p className="text-sm text-gray-600">
              Our AI will analyze your uploads and generate a high-quality 3D model automatically.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg bg-white">
            <div className="w-10 h-10 rounded-full bg-pixmesh-100 flex items-center justify-center text-pixmesh-500 mb-4">
              3
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Download & Share</h3>
            <p className="text-sm text-gray-600">
              Download your model in various formats or generate a shareable link.
            </p>
          </div>
        </div>
        
        <div className="mt-10">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Tips for Best Results</h3>
          
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Ensure consistent, even lighting without harsh shadows</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Use a plain, contrasting background</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Capture all sides of your product including top and bottom</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>For videos, use slow, steady rotation of the product</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
