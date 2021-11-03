import * as Yup from 'yup';
import { useFormik } from 'formik';

import { FormContainer } from "../FormContainer";
import { Input } from '../../Input';
import { Select } from '../../Select';


type FunctionaryProps = {
  empresa: string,
  nome: string,
  cpf: number,
  cargo: string,
}

type Functionary = {
  id: number,
  empresa: string,
  nome: string,
  cpf: number,
  cargo: string,
  salario: string
}

type FunctionaryFormProps = {
  functionary?: Functionary;
  title: string;
  handlerFunctionaryOperation: (data: FunctionaryProps) => void;
}

export function FunctionaryForm({
  functionary,
  title,
  handlerFunctionaryOperation
}: FunctionaryFormProps) {

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required('*O nome é obrigatório'),
    // cpf: Yup.string().required('*O CNPJ é obrigatório'),
    // cpf: Yup.,
    // cargo:
  });

  const formik = useFormik({
    initialValues: {
      empresa: functionary != null ? functionary.empresa : "",
      nome: functionary != null ? functionary.nome : "",
      cpf: functionary != null ? functionary.cpf : 0,
      cargo: functionary != null ? functionary.cargo : "",
    },
    validationSchema,
    onSubmit: (data) => {
      handlerFunctionaryOperation(data);
    }
  });

  return (
    <FormContainer
      title={title}
      isFunctionaryForm
      handleSubmit={formik.handleSubmit}
    >
      <div>
        <label>Selectione uma Empresa</label>
        <Select
          required
          defaultValue={'DEFAULT'}
        >
          <option value="DEFAULT" disabled>Selecione</option>
          <option value="1">Empresa 1</option>
          <option value="2">Empresa 2</option>
          <option value="3">Empresa 3</option>
        </Select>
      </div>

      <div className="input-group">
        <div>
          <label htmlFor="nome">Nome</label>
          <Input
            name="nome"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.nome}
            hasError={formik.errors.nome != null}
          />

          <span>{formik.errors.nome ? formik.errors.nome : null}</span>
        </div>

        <div>
          <label htmlFor="cpf">Cpf</label>
          <Input
            name="cpf"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.cpf}
            hasError={formik.errors.cpf != null}
          />

          <span>{formik.errors.cpf ? formik.errors.cpf : null}</span>
        </div>
      </div>

      <div>
        <label>Selectione um Cargo</label>
        <Select
          required
          defaultValue={'DEFAULT'}
        >
          <option defaultValue={'DEFAULT'} disabled>Selecione</option>
          <option value="1">Empresa 1</option>
          <option value="2">Empresa 2</option>
          <option value="3">Empresa 3</option>
        </Select>
      </div>

    </FormContainer>
  );
}