// import { useEffect } from "react";
import { useHistory, useLocation } from "react-router";

import { Header } from "../../../components/Header";
import { Sidebar } from '../../../components/Sidebar';
import { CompanyForm } from '../../../components/Forms/CompanyForm';

import db from '../../../data/companies.json';

type Company = {
  nome: string;
  cnpj: string;

}

type CompanyFull = Company & {
  id: number;
  funcionarios: string;
  gastos_totalF: string;
}

type Object = {
  company: CompanyFull;
}

export function EditCompany() {

  const state = useLocation<Object>().state.company;
  const history = useHistory();

  function handlerEditCompany(data: Company){
    let index = db.findIndex(company => {
      return company.id === state.id;
    })

    db[index].nome = data.nome;
    db[index].cnpj = data.cnpj;

    // console.log(db[index]);
    alert("Empresa Atualizada com sucesso!");
    history.push("/dashboard/company")
  }

  return (
    <div className="wrapper">
    <Sidebar companyIsActive />
    <main>
      <Header />
      <CompanyForm
        company={state}
        title="Editar Empresa"
        handlerCompanyOperation={handlerEditCompany}
      />
    </main>
  </div>
  );
}