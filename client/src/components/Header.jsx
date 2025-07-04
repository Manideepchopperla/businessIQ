import { Building2, TrendingUp } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">BusinessIQ</h1>
              <p className="text-sm text-gray-600">Local Business Analytics</p>
            </div>
          </div>
          
          {/* <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
            <TrendingUp className="w-4 h-4" />
            <span>AI-Powered Insights</span>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;