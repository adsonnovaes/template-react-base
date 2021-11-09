import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useCompany } from '../../../hooks/useCompany';

import { replaceCpf } from '../../../utils/utils';

import { FunctionaryForm } from '../../../components/Forms/FunctionaryForm';
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

  function HandlerCreateFunctionary(data: FunctionaryProps) {
    const { company, index, cargo } = useCompany(data.empresa, data.cargo);

    if (cargo !== undefined && company !== undefined) {

      const newFunctionary = {
        id: db_functionary.length + 1,
        empresa: company.nome,
        nome: data.nome,
        cpf: replaceCpf(data.cpf),
        cargo: cargo.position,
        salario: cargo.salary,
        foreign_keys: {
          id_company: company.id,
          id_position: cargo.id
        }
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
          handlerFunctionaryOperation={HandlerCreateFunctionary}
        />
      </main>
    </div>
  )
}