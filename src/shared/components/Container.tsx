import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className={`container mx-auto h-full px-4 xl:px-20`}>{children}</div>
  );
}
