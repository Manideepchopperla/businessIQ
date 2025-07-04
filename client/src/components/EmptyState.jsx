import { useBusiness } from '../context/BusinessContext';

const EmptyState = () => {
  const { businessData, loading } = useBusiness();
  
  if (businessData || loading) {
    return null;
  }

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
      <div className="text-center text-gray-500">
        <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">Ready to Analyze Your Business</h3>
        <p className="text-sm">Enter your business details to get started with AI-powered insights</p>
      </div>
    </div>
  );
};

export default EmptyState;