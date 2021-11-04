import { InputHTMLAttributes, useCallback } from 'react';

import { Cpf } from '../Masks';

import './styles.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
  mask?: "cpf";
};
 
export function Input({
  hasError = false,
  mask,
  ...props
}: InputProps) {


  const handlerkeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    if (mask === 'cpf') {
      Cpf(e);
    }
  }, [mask]);

  return (
    <input
      className={`input ${hasError ? 'error' : ''}`}
      onKeyDown={handlerkeyUp}
      {...props}
    />
  );
}