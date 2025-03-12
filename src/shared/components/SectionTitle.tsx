import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function SectionTitle({
  children,
  styles,
}: {
  children?: ReactNode;
  styles?: string;
}) {
  return (
    <h2
      className={twMerge(
        `mb-[2px] text-title font-bold tracking-minus4 uppercase`,
        styles
      )}
    >
      {children}
    </h2>
  );
}
