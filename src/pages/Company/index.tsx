import { useEffect } from 'react';
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

import db from '../../data/companies.json';

import './styles.scss';

// type CompanyProps = {
//   id: number;
//   nome: string;
//   cnpj: string;
//   funcionarios: string;
//   gastos_totalF: string;
// }

export function Company() {

  // const [companies, setCompanies] = useState<CompanyProps[]>(db);

  useEffect(() => {
    document.title = "Web | Empresa";
  }, [])

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
                      <Link to="/" id="edit">
                        <AiOutlineEdit
                          size={20}
                        />
                      </Link>

                      <Link to="/" id="delete">
                        <AiOutlineDelete
                          size={20}
                        />
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>

        </div>
      </main>
    </div>
  );
}