interface CardDescriptionProps {
  description: string;
}

export const CardDescription = ({ description }: CardDescriptionProps) => {
  return (
    <div>
      <p>{description}</p>
    </div>
  );
};
