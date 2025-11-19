const SkeletonCard = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden animate-pulse">
      
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-gray-300"></div>

      <div className="p-5">
        {/* Title Skeleton */}
        <div className="h-6 bg-gray-300 rounded-md mb-4 w-3/4"></div>

        {/* Text Skeleton */}
        <div className="h-4 bg-gray-300 rounded-md mb-2 w-full"></div>
        <div className="h-4 bg-gray-300 rounded-md mb-4 w-5/6"></div>

        {/* Button Skeleton */}
        <div className="h-10 bg-gray-300 rounded-md w-32"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
