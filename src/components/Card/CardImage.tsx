import Image from 'next/image';

interface CardImageProps {
  src: string;
  alt: string;
}

export const CardImage = ({ src, alt }: CardImageProps) => {
  return (
    <div className="relative flex aspect-[379/197] w-full items-center justify-center overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        quality={75}
        loading="lazy"
        sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 379px"
        className="object-cover"
      />
    </div>
  );
};
