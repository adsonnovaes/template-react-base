import { InputHTMLAttributes } from 'react';

import './styles.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

export function Input({
  hasError = false, ...props
}: InputProps) {
  return (
    <input
      className={`input ${hasError ? 'error' : ''}`}
      {...props}
    />
  );
}