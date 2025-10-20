import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-teal-200 border-t-teal-500 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="w-12 h-12 border-4 border-transparent border-t-teal-300 rounded-full animate-spin absolute top-2 left-1/2 transform -translate-x-1/2"></div>
        </div>
        <p className="text-gray-600 font-medium">Memuat Pendidik Hebat...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
