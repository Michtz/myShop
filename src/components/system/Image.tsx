import React, { useState, useEffect } from 'react';
import styles from '../../styles/system/image.module.scss';

interface ImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  caption?: string;
  fallbackSrc?: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  caption,
  fallbackSrc = 'https://via.placeholder.com/150',
  className,
}) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
      setIsLoading(false);
    };
    img.onerror = () => {
      setImgSrc(fallbackSrc);
      setError(true);
      setIsLoading(false);
    };
  }, [src, fallbackSrc]);

  return (
    <figure className={`${styles.imageContainer} ${className || ''}`}>
      {isLoading && <div className={styles.skeleton} style={{ width, height }} />}
      {!isLoading && (
        <img
          src={imgSrc || fallbackSrc}
          alt={alt}
          width={width}
          height={height}
          className={`${styles.image} ${error ? styles.error : ''}`}
        />
      )}
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
};

export default Image;