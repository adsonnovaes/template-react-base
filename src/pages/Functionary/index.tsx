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
import { Loading } from '../../components/Loading';

type FunctionaryProps = {
  id: number,
  empresa: string,
  nome: string,
  cpf: number,
  cargo: string,
  salario: number,
  foreign_keys: {
    id_company: number,
    id_position: number
  }
}

export function Functionary() {

  const [employees, setEmployees] = useState<FunctionaryProps[]>(db);

  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const [idFunctionary, setIdFunctionary] = useState<number | undefined>();
  const [idCompany, setIdCompany] = useState<number | undefined>();
  const [salaryCurrent, setSalaryCurrent] = useState<number | undefined>();

  useEffect(() => {
    document.title = "Web | Funcionário";
  }, []);

  function HandleDeleteFunctionary(
    functionaryId: number | undefined,
    salary: number | undefined,
    companyId: number | undefined,
  ) {
    setIsVisibleModal(false);

    if (functionaryId === undefined) {
      return;
    }

    if (functionaryId !== undefined && salary !== undefined && companyId !== undefined) {

      var indexFunctionary = db.findIndex(functionary => {
        return functionary.id === functionaryId;
      })

      var indexCompany = db_company.findIndex(company => {
        return company.id === companyId;
      })

      if (indexCompany !== undefined) {
        db_company[indexCompany].gastos_totalF -= salary;
        db_company[indexCompany].funcionarios--;
      }

      db.splice(indexFunctionary, 1);

      // alert(`Funcionáio ${Deleted}`)
    }
  }

  useEffect(() => {
    if (!!idFunctionary) {
      setIsVisibleModal(true);
    }
  }, [idFunctionary]);

  useEffect(() => {
    if (search !== "") {
      return;
    }
    setEmployees(db);
  }, [search]);

  function isNumber(str: any) {
    return !isNaN(str)
  }

  function handlerSearch() {
    setIsLoading(true);

    let filtered: FunctionaryProps[];

    if (isNumber(search)) {
      filtered = db.filter(employee => {
        return employee.cpf.toString().includes(search);
      });

    } else {
      let lowerSearch = search.toLowerCase();

      filtered = db.filter(employee => {
        return employee.nome.toLowerCase().includes(lowerSearch);
      });

    }

    setEmployees(filtered);
    setIsLoading(false);
  }

  useEffect(() => {
    setIsLoading(false);
  }, [employees]);

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
                  value={search}
                  onChange={event => setSearch(event.target.value)}
                />
                <Button
                  onClick={handlerSearch}
                >
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

          {isLoading ? (
            <Loading />
          ) : (
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
                {employees.map(functionary => {
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
                            setSalaryCurrent(functionary.salario)
                            setIdCompany(functionary.foreign_keys.id_company)
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
          )}

        </div>

        <Modal
          isOpen={isVisibleModal}
          setVisibility={() => {
            setIsVisibleModal(false);
            setIdFunctionary(undefined);
            setSalaryCurrent(undefined);
            setIdCompany(undefined);
          }}
          handleConfirmed={() => HandleDeleteFunctionary(idFunctionary, salaryCurrent, idCompany)}
        >
          Tem certeza que você deseja excluir este Funcionário?
        </Modal>
      </main>
    </div>
  );
}