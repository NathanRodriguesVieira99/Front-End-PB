import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="">
      <Image
        src="/images/Hero_img.gif"
        alt="Imagem de fundo"
        layout={'responsive'}
        height={623}
        width={1920}
        unoptimized={true}
        loading="lazy"
      />
    </div>
  );
};
