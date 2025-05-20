import Image, { ImageProps } from 'next/image';
import { twMerge } from 'tailwind-merge';

interface CardImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
  className?: string;
}

export const CardImage = ({
  src,
  alt,
  className,
  ...ImageProps
}: CardImageProps) => {
  return (
    <div
      className={twMerge(
        'relative flex aspect-[379/197] w-full items-center justify-center overflow-hidden',
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        quality={75}
        loading="lazy"
        sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 379px"
        className="object-cover"
        {...ImageProps}
      />
    </div>
  );
};
