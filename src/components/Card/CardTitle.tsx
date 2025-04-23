interface CardTitleProps {
  title: string;
}

export const CardTitle = ({ title }: CardTitleProps) => {
  return (
    <div className="w-full">
      <h1 className="text-heading-small font-bold text-text-main sm:text-heading-medium">
        {title}
      </h1>
    </div>
  );
};
