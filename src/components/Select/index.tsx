import { SelectHTMLAttributes } from 'react';

import './styles.scss';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  hasError?: boolean;
};

export function Select({
  hasError = false, ...props
}: SelectProps) {
  return (
    <select
      className={`input ${hasError ? 'error' : ''}`}
      {...props}
    />
  );
}