import { twMerge } from 'tailwind-merge';

interface FooterCreatorsListProps {
  name: string;
  className?: string;
}

export const FooterCreators = ({
  name,
  className,
}: FooterCreatorsListProps) => {
  return (
    <ul className={twMerge('text-xl text-text-main', className)}>
      <li className={twMerge('', className)}>{name}</li>
    </ul>
  );
};
