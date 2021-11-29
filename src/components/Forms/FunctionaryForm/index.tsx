import * as Yup from 'yup';
import { useFormik } from 'formik';

import { FormContainer } from "../FormContainer";
import { Input } from '../../Input';
import { Select } from '../../Select';

import db_company from '../../../data/companies.json';
import db_office from '../../../data/office.json';

type FunctionaryProps = {
  empresa: string,
  nome: string,
  cpf: string,
  cargo: string,
}

type Functionary = {
  id: number,
  empresa: string,
  nome: string,
  cpf: string,
  cargo: string,
  salario: number
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
    cpf: Yup.string().min(11, '*Cpf está incompleto').required('*O Cpf é obrigatório'),
    cargo: Yup.string().required('*Selecione o cargo')
  });

  const formik = useFormik({
    initialValues: {
      empresa: "DEFAULT",
      nome: functionary != null ? functionary.nome : "",
      cpf: functionary != null ? functionary.cpf : "",
      // No select ao definir o valor passado pelo parametro o id não vem junto, 
      // Dificultando assim a busca pelo indice
      cargo: "DEFAULT",
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
          // defaultValue={'DEFAULT'}
          onChange={formik.handleChange}
          name="empresa"
          value={formik.values.empresa}
        >
          <option value="DEFAULT" disabled>Selecione</option>
          {db_company.map((company, index) => {
            return (
              <option key={index + company.id} value={company.id}>{company.nome}</option>
            )
          })}
        </Select>
        <span>{formik.errors.empresa ? formik.errors.empresa : null}</span>
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
          // defaultValue={'DEFAULT'}
          onChange={formik.handleChange}
          name="cargo"
          value={formik.values.cargo}
        >
          <option value="DEFAULT" disabled>Selecione</option>
          {db_office.map((office, index) => {
            return (
              <option key={index + office.id} value={office.id}>{office.position}</option>
            )
          })}
          
        </Select>
        <span>{formik.errors.cargo ? formik.errors.cargo : null}</span>
      </div>

    </FormContainer>
  );
}