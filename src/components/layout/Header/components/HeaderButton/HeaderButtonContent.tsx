import type { ReactNode } from 'react';

interface HeaderButtonContentProps {
  children: ReactNode;
}

export const HeaderButtonContent = ({ children }: HeaderButtonContentProps) => {
  return <div>{children}</div>;
};
