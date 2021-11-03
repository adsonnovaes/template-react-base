import { ReactNode } from 'react';
import { Button } from '../../Button';

import '../../../styles/form.scss';

type FormProps = {
  title: string;
  isFunctionaryForm?: boolean;
  isCompanyForm?: boolean;
  handleSubmit: () => void;
  children: ReactNode;
}

export function FormContainer({
  title,
  isFunctionaryForm,
  isCompanyForm,
  handleSubmit,
  children
}: FormProps) {
  return (
    <div className="container-create">

      <h1>{title}</h1>
      
      <div className="container-form">
        <div className="form-group">
          <form 
            className={
              `${isFunctionaryForm ? 'functionary-form' : ''} ${isCompanyForm ? 'company-form' : ''}`
            }
            onSubmit={handleSubmit}
          >
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