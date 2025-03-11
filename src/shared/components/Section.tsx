import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Section({
  children,
  styles,
}: {
  children: ReactNode;
  styles?: string;
}) {
  return (
    <section className={twMerge(`pt-[40px] pb-[37px]`, styles)}>
      {children}
    </section>
  );
}
