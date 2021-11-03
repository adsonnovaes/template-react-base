import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineEdit,
  AiOutlineDelete
} from 'react-icons/ai';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';
import { Modal } from '../../components/Modal';

import db from '../../data/companies.json';

import './styles.scss';

type CompanyProps = {
  id: number;
  nome: string;
  cnpj: string;
  funcionarios: string;
  gastos_totalF: string;
}

export function Company() {

  // const [companies, setCompanies] = useState<CompanyProps[]>(db);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [idCompany, setIdCompany] = useState<number | undefined>();

  useEffect(() => {
    document.title = "Web | Empresa";
  }, []);

  function handleDeleteCompany(id: number|undefined) {
    setIsVisibleModal(false);

    if(id === undefined) {
      return;
    }

    if(id) {
      var index = db.findIndex(company => {
        return company.id === id;
      })

      const companyDeleted =  db.splice(index, 1);

      // alert(`Empresa ${companyDeleted.}`)
    }
  }

  useEffect(() => {
    if(!!idCompany){
      console.log(idCompany)
      setIsVisibleModal(true);
    }
  },[idCompany]);

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
                />
                <Button>
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
              {db.map(company => {
                return (
                  <tr key={company.id}>
                    <td>{company.nome}</td>
                    <td>{company.cnpj}</td>
                    <td>{company.funcionarios}</td>
                    <td>{company.gastos_totalF}</td>
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
              })}
            </tbody>
          </Table>

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