import { useBusiness } from '../context/BusinessContext';

const LoadingSpinner = () => {
  const { loading, businessData } = useBusiness();
  
  if (!loading || businessData) {
    return null;
  }

  return (
    <div className="flex justify-center items-center h-64">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-purple-600 rounded-full animate-spin animation-delay-150"></div>
        </div>
        <p className="text-gray-600 text-sm">Analyzing your business...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;