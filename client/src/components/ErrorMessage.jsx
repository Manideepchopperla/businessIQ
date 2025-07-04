import { AlertCircle, X } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

const ErrorMessage = () => {
  const { error, clearError } = useBusiness();
  
  if (!error) {
    return null;
  }

  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <p className="text-red-800 text-sm">{error}</p>
      </div>
      <button
        onClick={clearError}
        className="text-red-600 hover:text-red-700 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ErrorMessage;