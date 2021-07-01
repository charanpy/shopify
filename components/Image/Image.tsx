import React from 'react';
import Image from 'next/image';

const ImageComponent = ({ src, width, height, alt, className = null }) => {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      objectFit='contain'
      blurDataURL='/load.png'
      placeholder='blur'
      quality={100}
      className={className}
    />
  );
};

export default ImageComponent;
