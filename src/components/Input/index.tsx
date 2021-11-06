import { InputHTMLAttributes, useCallback } from 'react';

import { Cpf, Cnpj } from '../Masks';

import './styles.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
  mask?: "cpf" | "cnpj";
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

    if (mask === 'cnpj') {
      Cnpj(e);
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