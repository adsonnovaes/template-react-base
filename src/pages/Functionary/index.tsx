import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineEdit,
  AiOutlineDelete
} from 'react-icons/ai';

import { useCompany } from '../../hooks/useCompany';
import { replaceMoney, formatCPF } from '../../utils/utils';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';
import { Modal } from '../../components/Modal';

import './styles.scss';

import db from '../../data/employees.json';
import db_company from '../../data/companies.json';

export function Functionary() {

  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [idFunctionary, setIdFunctionary] = useState<number | undefined>();
  // const [idPosition, setIdPosition] = useState<string | undefined>();

  useEffect(() => {
    document.title = "Web | Funcionário";
  }, []);

  function HandleDeleteFunctionary(
    id: number | undefined
  ) {
    setIsVisibleModal(false);
    
    if (id === undefined) {
      return;
    }
    
    // if (id != undefined && position != undefined) {
    //   let idChange = "" + id;
    //   const { cargo } = useCompany(idChange, position);

    //   var index = db.findIndex(functionary => {
    //     return functionary.id === id;
    //   })

    //   if (cargo != undefined) {
    //     console.log(db_company[index].gastos_totalF -= cargo.salary);
    //     console.log(db_company[index].funcionarios--);
    //   }
      
    //   db.splice(index, 1);

    //   // alert(`Funcionáio ${Deleted}`)
    // }
  }

  useEffect(() => {
    if (!!idFunctionary) {
      setIsVisibleModal(true);
    }
  }, [idFunctionary]);

  return (
    <div className="wrapper">
      <Sidebar functionaryIsActive />
      <main>
        <Header />
        <div className="container-body">

          <div className="header">

            <div className="separator" >
              <h1>Funcionários</h1>
              <div className="search">
                <Input
                  placeholder="Buscar por Nome/CPF"
                />
                <Button>
                  Buscar
                </Button>
              </div>
            </div>

            <div className="buttons-container">
              <Link to="/dashboard/functionary/create">
                <Button id="button-create">
                  Novo Funcionário
                </Button>
              </Link>

              <Button id="button-create">Importar</Button>
            </div>
          </div>

          <Table>
            <thead>
              <tr>
                <th>Empresa</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>Cargo</th>
                <th>Salário</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {db.map(functionary => {
                return (
                  <tr key={functionary.id}>
                    <td>{functionary.empresa}</td>
                    <td>{functionary.nome}</td>
                    <td>{formatCPF(functionary.cpf)}</td>
                    <td>{functionary.cargo}</td>
                    <td>{replaceMoney(functionary.salario)}</td>
                    <td className="text-center">
                      <Link to={{
                        pathname: "/dashboard/functionary/edit",
                        state: {
                          functionary
                        }
                      }} id="edit">
                        <AiOutlineEdit
                          size={20}
                        />
                      </Link>

                      <button
                        id="delete"
                        onClick={() => {
                          setIdFunctionary(functionary.id)
                            // setIdPosition(functionary.cargo)
                        }}
                      >
                        <AiOutlineDelete
                          size={20}
                        />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>

        </div>

        <Modal
          isOpen={isVisibleModal}
          setVisibility={() => {
            setIsVisibleModal(false);
            setIdFunctionary(undefined);
            // setIdPosition(undefined);
          }}
          handleConfirmed={() => HandleDeleteFunctionary(idFunctionary)}
        >
          Tem certeza que você deseja excluir este Funcionário?
        </Modal>
      </main>
    </div>
  );
}