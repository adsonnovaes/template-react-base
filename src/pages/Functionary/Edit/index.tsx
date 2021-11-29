import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useCompany } from '../../../hooks/useCompany';

import { replaceCpf } from '../../../utils/utils';

import { FunctionaryForm } from '../../../components/Forms/FunctionaryForm';
import { Header } from '../../../components/Header';
import { Sidebar } from '../../../components/Sidebar';

import db_functionary from '../../../data/employees.json';
import db_company from '../../../data/companies.json';

import '../functionary-form.scss';

type FunctionaryProps = {
  empresa: string,
  nome: string,
  cpf: string,
  cargo: string,
}

type FunctionaryFull = FunctionaryProps & {
  id: number,
  salario: number,
  foreign_keys: {
    id_company: number,
    id_position: number
  }
}

type Object = {
  functionary: FunctionaryFull;
}

export function EditFunctionary() {

  const state = useLocation<Object>().state.functionary;
  const history = useHistory();

  useEffect(() => {
    document.title = "Web | Editar Funcionário";
  }, []);

  function HandlerEditFunctionary(data: FunctionaryProps) {
    const { company, index, cargo } = useCompany(data.empresa, data.cargo);

    if (cargo !== undefined && company !== undefined) {
      let indexFun = db_functionary.findIndex(functionary => {
        return functionary.id === state.id;
      })
      
      if (state.foreign_keys.id_company === company.id &&
        state.foreign_keys.id_position !== cargo.id) {

        // Decrementando o salário antigo
        db_company[index].gastos_totalF -= state.salario;
        // Adicionando o salário novo
        db_company[index].gastos_totalF += cargo.salary;

      }

      db_functionary[indexFun].empresa = company.nome;
      db_functionary[indexFun].nome = data.nome;
      db_functionary[indexFun].cpf = replaceCpf(data.cpf);
      db_functionary[indexFun].cargo = cargo.position;
      db_functionary[indexFun].salario = cargo.salary;
      db_functionary[indexFun].foreign_keys.id_position = cargo.id;


      alert(`Funcionário ${data.nome} editado com sucesso`);

      history.push("/dashboard/functionary");
    }
  }

  return (
    <div className="wrapper">
      <Sidebar functionaryIsActive />
      <main>
        <Header />
        <FunctionaryForm
          title="Editar Funcionário"
          functionary={state}
          handlerFunctionaryOperation={HandlerEditFunctionary}
        />
      </main>
    </div>
  )
}