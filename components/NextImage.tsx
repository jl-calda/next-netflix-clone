import React from "react";
import Image from "next/image";

interface NextImageProps {
  src: string;
  alt: string;
  className?: string;
  height: number;
  width?: number;
  objectAlign?: "object-center" | "object-left" | "object-right";
}

const NextImage: React.FC<NextImageProps> = ({
  src,
  className,
  alt,
  height,
  objectAlign,
}) => {
  return (
    <div
      className={`w-full relative`}
      style={{
        height: `${height}px`,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`${className} object-contain ${
          objectAlign ? objectAlign : "object-left"
        }`}
      />
    </div>
  );
};

export default NextImage;
