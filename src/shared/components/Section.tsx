import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Section({
  children,
  styles,
  id,
}: {
  children: ReactNode;
  styles?: string;
  id?: string;
}) {
  return (
    <section className={twMerge(`pt-[40px] pb-[37px]`, styles)} id={id}>
      {children}
    </section>
  );
}
