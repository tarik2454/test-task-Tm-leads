import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
  children: ReactNode;
  styles?: string;
}

export default function Container({ children, styles }: ContainerProps) {
  return (
    <div className={twMerge(`container mx-auto h-full px-4 xl:px-20`, styles)}>
      {children}
    </div>
  );
}
