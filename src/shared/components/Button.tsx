import { twMerge } from 'tailwind-merge';

interface PropsButton {
  styles?: string;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick?: (...args: unknown[]) => unknown;
  disabled?: boolean;
}

export default function Button({
  styles,
  type = 'button',
  children,
  onClick,
}: PropsButton) {
  return (
    <button
      type={type}
      className={twMerge(
        `w-fit px-6 py-4 font-medium text-black-100 bg-cyan rounded-sm shadow-cyan transition-all`,
        styles
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
