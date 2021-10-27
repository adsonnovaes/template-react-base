import { ReactNode } from 'react';
import { Button } from '../Button';

import '../../styles/form.scss';

type FormProps = {
  title: string;
  handleSubmit: () => void;
  children: ReactNode;
}

export function Form({
  title,
  handleSubmit,
  children
}: FormProps) {
  return (
    <div className="container-create">

      <h1>{title}</h1>
      
      <div className="container-form">
        <div className="form-group">
          <form onSubmit={handleSubmit}>
            {children}
            <Button type="submit">
              Salvar
            </Button>
          </form>
        </div>
      </div>

    </div>
  )
}