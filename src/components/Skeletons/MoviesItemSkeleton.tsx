import React from "react";
import ContentLoader from "react-content-loader";

const MoviesItemSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={177}
      height={316}
      viewBox="0 0 177 316"
      backgroundColor="#d8d8d8"
      foregroundColor="#ecebeb"
      className="min-w-[120px] sm:min-w-[177px] pl-2 pt-2"
    >
      <rect x="0" y="0" rx="20" ry="20" width="177" height="240" />
      <rect x="0" y="294" rx="8" ry="8" width="147" height="10" />
      <rect x="0" y="259" rx="8" ry="8" width="147" height="16" />
    </ContentLoader>
  );
};

export default MoviesItemSkeleton;
