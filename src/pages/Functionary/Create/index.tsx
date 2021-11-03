import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { FunctionaryForm } from '../../../components/Forms/FunctionaryForm';

import { Header } from '../../../components/Header';
import { Sidebar } from '../../../components/Sidebar';

import db from '../../../data/employees.json';

import '../functionary-form.scss';

type FunctionaryProps = {
  empresa: string,
  nome: string,
  cpf: number,
  cargo: string,
}

export function CreateFunctionary(){

  const history = useHistory();

  useEffect(() => {
    document.title = "Web | Novo Funcionário";
  }, []);

  function handlerCreateFunctionary(data: FunctionaryProps) {
    const newFunctionary = {
      id: db.length + 1,
      empresa: data.empresa,
      nome: data.nome,
      cpf: data.cpf,
      cargo: data.cargo,
      salario: "$12,3333",
    }

    db.push(newFunctionary);

    alert(`Funcionário ${data.nome} criado com sucesso`);

    history.push("/dashboard/functionary");
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