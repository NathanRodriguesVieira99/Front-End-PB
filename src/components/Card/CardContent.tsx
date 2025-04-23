interface CardContentProps {
  children: React.ReactNode;
}

export const CardContent = ({ children }: CardContentProps) => {
  return <div className="flex flex-col">{children}</div>;
};
