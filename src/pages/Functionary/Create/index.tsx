import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { FunctionaryForm } from '../../../components/Forms/FunctionaryForm';
import { replaceCpf } from '../../../utils/utils';

import { Header } from '../../../components/Header';
import { Sidebar } from '../../../components/Sidebar';

import db_functionary from '../../../data/employees.json';
import db_company from '../../../data/companies.json';
import db_office from '../../../data/office.json';

import '../functionary-form.scss';

type FunctionaryProps = {
  empresa: string,
  nome: string,
  cpf: string,
  cargo: string,
}

export function CreateFunctionary() {

  const history = useHistory();

  useEffect(() => {
    document.title = "Web | Novo Funcionário";
  }, []);

  function handlerCreateFunctionary(data: FunctionaryProps) {
    const cargo = db_office.find(office => {
      let idCargo = parseInt(data.cargo);
      return office.id === idCargo;
    });

    const company = db_company.find(company => {
      let idCompany = parseInt(data.empresa);
      return company.id === idCompany;
    });

    const index = db_company.findIndex(company => {
      let idCompany = parseInt(data.empresa);
      return company.id === idCompany;
    });

    if (cargo !== undefined && company !== undefined) {

      const newFunctionary = {
        id: db_functionary.length + 1,
        empresa: company.nome,
        nome: data.nome,
        cpf: replaceCpf(data.cpf),
        cargo: cargo.position,
        salario: cargo.salary,
      }

      db_functionary.push(newFunctionary);
      db_company[index].gastos_totalF += cargo.salary;
      db_company[index].funcionarios++;

      alert(`Funcionário ${data.nome} criado com sucesso`);

      history.push("/dashboard/functionary");
    }
  }

  return (
    <div className="wrapper">
      <Sidebar functionaryIsActive />
      <main>
        <Header />
        <FunctionaryForm
          title="Novo Funcionário"
          handlerFunctionaryOperation={handlerCreateFunctionary}
        />
      </main>
    </div>
  )
}