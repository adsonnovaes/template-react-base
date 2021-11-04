import * as Yup from 'yup';
import { useFormik } from 'formik';

import { FormContainer } from "../FormContainer";
import { Input } from '../../Input';
import { Select } from '../../Select';

import db_company from '../../../data/companies.json';
import db_functionary from '../../../data/employees.json';
import db_office from '../../../data/office.json';

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
    empresa: Yup.string().required('*Selecione uma Empresa'),
    nome: Yup.string().required('*O nome é obrigatório'),
    cpf: Yup.string().min(14, '*Cpf está incompleto').required('*O Cpf é obrigatório'),
    cargo: Yup.string().required('*Selecione o cargo')
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
          {db_company.map((company, index) => {
            return (
              <option key={index + company.id} value={company.id}>{company.nome}</option>
            )
          })}
        </Select>
      </div>

      <div className="input-group">
        <div>
          <label htmlFor="nome">Nome</label>
          <Input
            name="nome"
            type="text"
            placeholder="Digite o nome"
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
            mask="cpf"
            placeholder="Digite o cpf"
            maxLength={14}
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
          <option value="DEFAULT" disabled>Selecione</option>
          {db_office.map((office, index) => {
            return (
              <option key={index + office.id} value={office.id}>{office.position}</option>
            )
          })}
          
        </Select>
      </div>

    </FormContainer>
  );
}