import { InputHTMLAttributes } from 'react';

import './styles.scss';

type ButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

export function Input({
  hasError = false, ...props
}: ButtonProps) {
  return (
    <input
      className={`input ${hasError ? 'error' : ''}`}
      {...props}
    />
  );
}