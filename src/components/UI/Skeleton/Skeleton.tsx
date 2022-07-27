import React from "react";

interface SkeletonProps {
  height: string;
  width: string;
  radius: number;
  style?: object;
}

export const Skeleton: React.FC<SkeletonProps> = ({ height, width, radius, style }) => {
  return (
    <>
      <div className="skeleton" style={{ width: width, height: height, borderRadius: radius, ...style }}></div>
    </>
  );
};
