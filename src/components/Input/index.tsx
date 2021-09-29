import { InputHTMLAttributes } from 'react';

import './styles.scss';

type ButtonProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({...props}: ButtonProps) {
  return (
    <input 
      className="input" 
      {...props} 
    />
  );
}