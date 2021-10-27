import { useEffect } from "react";

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { Header } from "../../../components/Header";
import { Sidebar } from '../../../components/Sidebar';
import { Form } from "../../../components/Form";
import { Input } from "../../../components/Input";

import './styles.scss';

type CompanyProps = {
  nome: string;
  cnpj: string;
}

export function NewCompany() {

  useEffect(() => {
    document.title = "Web | Novo Funcionário";
  }, []);

  function handlerCreateCompany(data: CompanyProps) {

  }

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required('*O email é obrigatório'),
    cnpj: Yup.string().required('*A senha é obrigatório')
  });

  const formik = useFormik({
    initialValues: {
      nome: "",
      cnpj: ""
    },
    validationSchema,
    onSubmit: (data) => {
      handlerCreateCompany(data);
    }
  })


  return (
    <div className="wrapper">
      <Sidebar companyIsActive />
      <main>
        <Header />
        <Form
          title="Nova Empresa"
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
              minLength={14}
              maxLength={14}
              onChange={formik.handleChange}
              value={formik.values.cnpj}
              hasError={formik.errors.cnpj != null}
            />

            <span>{formik.errors.cnpj ? formik.errors.cnpj : null}</span>
          </div>


        </Form>
      </main>
    </div>
  );
}