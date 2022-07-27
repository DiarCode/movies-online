import React from "react";
import ContentLoader from "react-content-loader";

const GenreSkeleton = () => {
  return (
    <ContentLoader
      className="w-[177px] h-[112px]"
      speed={2}
      width={177}
      height={112}
      viewBox="0 0 177 112"
      backgroundColor="#d8d8d8"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="20" ry="20" width="177" height="112" />
    </ContentLoader>
  );
};

export default GenreSkeleton;
