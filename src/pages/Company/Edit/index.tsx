import { useEffect } from "react";
import { useHistory, useLocation } from "react-router";

import { Header } from "../../../components/Header";
import { Sidebar } from '../../../components/Sidebar';
import { CompanyForm } from '../../../components/Forms/CompanyForm';

import db from '../../../data/companies.json';

type Company = {
  id: number;
  nome: string;
  cnpj: string;
  funcionarios: string;
  gastos_totalF: string;
}

type Object = {
  company: Company;
}

export function EditCompany() {

  const state = useLocation<Object>().state.company;

  function handlerEditCompany(){

  }

  return (
    <div className="wrapper">
    <Sidebar companyIsActive />
    <main>
      <Header />
      <CompanyForm
        handlerCompanyOperation={handlerEditCompany}
      />
    </main>
  </div>
  );
}