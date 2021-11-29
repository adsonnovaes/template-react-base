import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineEdit,
  AiOutlineDelete
} from 'react-icons/ai';

import { FormatCnpj, replaceMoney } from '../../utils/utils';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';
import { Modal } from '../../components/Modal';
import { Loading } from '../../components/Loading';

import db from '../../data/companies.json';
// import { Company } from '../../types/types';

import './styles.scss';

export type CompanyProps = {
  id: number;
  nome: string;
  cnpj: number;
  funcionarios: number;
  gastos_totalF: number;
}

export function Company() {

  const [companies, setCompanies] = useState<CompanyProps[]>(db);

  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [idCompany, setIdCompany] = useState<number | undefined>();

  useEffect(() => {
    document.title = "Web | Empresa";
  }, []);

  function handleDeleteCompany(id: number | undefined) {
    setIsVisibleModal(false);

    if (id === undefined) {
      return;
    }

    if (id) {
      var index = db.findIndex(company => {
        return company.id === id;
      })

      db.splice(index, 1);

      // alert(`Empresa ${companyDeleted.}`)
    }
  }

  useEffect(() => {
    if (search !== "") {
      return;
    }
    setCompanies(db);
  }, [search]);

  useEffect(() => {
    if (!!idCompany) {
      setIsVisibleModal(true);
    }
  }, [idCompany]);

  function isNumber(str: any) {
    return !isNaN(str)
  }

  function handlerSearch() {
    setIsLoading(true);

    let filtered: CompanyProps[];

    if (isNumber(search)) {
      filtered = db.filter(company => {
        return company.cnpj.toString().includes(search);
      });

    } else {
      let lowerSearch = search.toLowerCase();

      filtered = db.filter(company => {
        return company.nome.toLowerCase().includes(lowerSearch);
      });

    }

    setCompanies(filtered);
    setIsLoading(false);
  }

  useEffect(() => {
    setIsLoading(false);
  }, [companies]);

  return (
    <div className="wrapper">
      <Sidebar companyIsActive />
      <main>
        <Header />
        <div className="container-body">

          <div className="header">

            <div className="separator" >
              <h1>Empresas</h1>
              <div className="search">
                <Input
                  placeholder="Buscar por Nome/CNPJ"
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

            <Link to="/dashboard/company/create">
              <Button id="button-create">
                Nova Empresa
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <Loading/>
          ) : (
            <Table> 
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>CNPJ</th>
                  <th>Funcionarios</th>
                  <th>Gastos total com Funcionários</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {companies.map(company => {
                  return (
                    <tr key={company.id}>
                      <td>{company.nome}</td>
                      <td>{FormatCnpj(company.cnpj)}</td>
                      <td>{company.funcionarios}</td>
                      <td>{replaceMoney(company.gastos_totalF)}</td>
                      <td className="text-center">
                        <Link to={{
                          pathname: "/dashboard/company/edit",
                          state: {
                            company
                          }
                        }} id="edit">
                          <AiOutlineEdit
                            size={20}
                          />
                        </Link>

                        <button
                          id="delete"
                          onClick={() => setIdCompany(company.id)}
                        >
                          <AiOutlineDelete
                            size={20}
                          />
                        </button>
                      </td>
                    </tr>
                  )
                })
                }
              </tbody>
            </Table>)}

        </div>

        <Modal
          isOpen={isVisibleModal}
          setVisibility={() => {
            setIsVisibleModal(false)
            setIdCompany(undefined);
          }}
          handleConfirmed={() => handleDeleteCompany(idCompany)}
        >
          Tem certeza que você deseja excluir esta Empresa?
        </Modal>
      </main>
    </div>
  );
}