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

import './styles.scss';

import db from '../../data/employees.json';

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

            <div className="buttons-container">
              <Button id="button-create">Novo Funcionário</Button>

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
                    <td>{functionary.cpf}</td>
                    <td>{functionary.cargo}</td>
                    <td>{functionary.salario}</td>
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