import { useEffect } from 'react';
import {
  AiOutlineEdit,
  AiOutlineDelete
} from 'react-icons/ai';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';

import './styles.scss';
import { Link } from 'react-router-dom';

export function Functionary() {

  useEffect(() => {
    document.title = "Web | Funcionário";
  }, [])

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

            <Button id="button-create">Novo Funcionário</Button>
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
              <tr>
                <td>Empresa 1</td>
                <td>Héldon</td>
                <td>1234</td>
                <td>Programador</td>
                <td>R$: 1.000,00</td>
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
              <tr>
                <td>Empresa 2</td>
                <td>Carlos</td>
                <td>4561</td>
                <td>Analista</td>
                <td>R$: 2.000,00</td>
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
            </tbody>
          </Table>

        </div>
      </main>
    </div>
  );
}