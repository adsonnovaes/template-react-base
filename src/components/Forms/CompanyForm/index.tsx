import * as Yup from 'yup';
import { useFormik } from 'formik';

import { FormContainer } from "../../../components/Forms/FormContainer";
import { Input } from "../../../components/Input";

type CompanyProps = {
  nome: string;
  cnpj: string;
}

type Company = {
  id: number;
  nome: string;
  cnpj: string;
  funcionarios: string;
  gastos_totalF: string;
}

type CompanyFormProps = {
  company?: Company;
  title: string;
  handlerCompanyOperation: (data:CompanyProps) => void;
}

export function CompanyForm({
  company,
  title,
  handlerCompanyOperation
}:CompanyFormProps) {


  const validationSchema = Yup.object().shape({
    nome: Yup.string().required('*O nome é obrigatório'),
    cnpj: Yup.string().required('*O CNPJ é obrigatório')
  });

  const formik = useFormik({
    initialValues: {
      nome: company != null ? company.nome : "",
      cnpj: company != null ? company.cnpj : ""
    },
    validationSchema,
    onSubmit: (data) => {
      handlerCompanyOperation(data);
    }
  })

  return (
    <FormContainer
      title={title}
      isCompanyForm
      handleSubmit={formik.handleSubmit}
    >
      <div>
        <label htmlFor="name">Nome</label>
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
        <label htmlFor="cnpj">CNPJ</label>
        <Input
          name="cnpj"
          type="text"
          mask="cnpj"
          minLength={18}
          maxLength={18}
          onChange={formik.handleChange}
          value={formik.values.cnpj}
          hasError={formik.errors.cnpj != null}
        />

        <span>{formik.errors.cnpj ? formik.errors.cnpj : null}</span>
      </div>


    </FormContainer>
  );
}