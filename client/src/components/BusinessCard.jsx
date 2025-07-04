import { Star, MessageCircle, Sparkles, RefreshCw } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

const BusinessCard = () => {
  const {
    businessData,
    loading,
    regenerateHeadline,
    isRegeneratingHeadline,
  } = useBusiness();

  if (!businessData || loading) {
    return null;
  }

  const { name, location, rating, reviews, headline } = businessData;

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-5 h-5 text-gray-300" />
          <Star
            className="w-5 h-5 fill-yellow-400 text-yellow-400 absolute top-0 left-0 overflow-hidden"
            style={{ clipPath: 'inset(0 50% 0 0)' }}
          />
        </div>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg space-y-6 animate-fade-in w-full">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-1 break-words">
          {name}
        </h3>
        <p className="text-gray-600 flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          {location}
        </p>
      </div>

      {/* Rating & Reviews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4">
          <div className="flex items-center flex-wrap space-x-2 mb-2">
            <div className="flex space-x-1">{renderStars(rating)}</div>
            <span className="text-lg font-semibold text-gray-900">
              {rating}
            </span>
          </div>
          <p className="text-sm text-gray-600">Google Rating</p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <MessageCircle className="w-5 h-5 text-blue-600" />
            <span className="text-lg font-semibold text-gray-900">
              {reviews}
            </span>
          </div>
          <p className="text-sm text-gray-600">Reviews</p>
        </div>
      </div>

      {/* Headline */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">
              AI-Generated SEO Headline
            </span>
          </div>
          <button
            onClick={regenerateHeadline}
            disabled={isRegeneratingHeadline || loading}
            className="text-purple-600 hover:text-purple-700 disabled:text-purple-300 transition-colors flex items-center space-x-1 text-sm"
          >
            <RefreshCw
              className={`w-4 h-4 ${isRegeneratingHeadline ? 'animate-spin' : ''}`}
            />
            <span>{isRegeneratingHeadline ? 'Generating...' : 'Regenerate'}</span>
          </button>
        </div>
        <p className="text-gray-800 font-medium leading-relaxed break-words">
          {headline}
        </p>
      </div>
    </div>
  );
};

export default BusinessCard;
