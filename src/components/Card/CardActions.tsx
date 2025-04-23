interface CardActionProps {
  // onClick?: () => void;
  children: React.ReactNode;
}

export const CardActions = ({ children }: CardActionProps) => {
  return <div>{children}</div>;
};
