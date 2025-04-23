interface CardRootProps {
  children: React.ReactNode;
}

// sm:w-[97%] md:flex-row md:items-center
export const CardRoot = ({ children }: CardRootProps) => {
  return (
    <div className="flex w-full max-w-96 flex-col flex-wrap gap-2 rounded-[5px] bg-store-darkest p-4">
      {children}
    </div>
  );
};
