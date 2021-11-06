import { useEffect } from "react";
import { useHistory } from "react-router";

import { Header } from "../../../components/Header";
import { Sidebar } from '../../../components/Sidebar';
import { CompanyForm } from '../../../components/Forms/CompanyForm';

import { replaceCnpj } from '../../../utils/utils';
import db from '../../../data/companies.json';

import '../company-form.scss';

type CompanyProps = {
  nome: string;
  cnpj: string;
}

export function CreateCompany() {

  const history = useHistory();

  useEffect(() => {
    document.title = "Web | Novo Empresa";
  }, []);

  function handlerCreateCompany(data: CompanyProps) {
    const newCompany = {
      id: db.length + 1,
      nome: data.nome,
      cnpj: parseInt(replaceCnpj(data.cnpj)),
      funcionarios: 0,
      gastos_totalF: 0
    }

    db.push(newCompany);

    alert(`Empresa ${data.nome} criada com sucesso`);

    history.push("/dashboard/company");
  }

  return (
    <div className="wrapper">
      <Sidebar companyIsActive />
      <main>
        <Header />
        <CompanyForm
          title="Nova Empresa"
          handlerCompanyOperation={handlerCreateCompany}
        />
      </main>
    </div>
  );
}