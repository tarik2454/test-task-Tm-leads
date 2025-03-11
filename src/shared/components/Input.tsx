import { twMerge } from 'tailwind-merge';

export default function Input({
  style,
  placeholder,
}: {
  style: string;
  placeholder: string;
}) {
  return (
    <input
      type="email"
      placeholder={placeholder}
      className={twMerge('input', style)}
    />
  );
}
