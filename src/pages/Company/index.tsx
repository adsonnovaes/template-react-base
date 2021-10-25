import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';

import './styles.scss';

export function Company() {

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

            <Button id="button-create">Nova Empresa</Button>
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
                <td>
                  {/* <a href="create.html" class="btn btn-warning btn-circle"><i class="fas fa-exclamation-triangle"></i></a>
                <a href="#" class="btn btn-danger btn-circle"><i class="fas fa-trash"></i></a> */}
                </td>
              </tr>
              <tr>
                <td>Empresa 2</td>
                <td>Carlos</td>
                <td>4561</td>
                <td>Analista</td>
                <td>R$: 2.000,00</td>
                <td>
                  {/* <a href="create.html" class="btn btn-warning btn-circle"><i class="fas fa-exclamation-triangle"></i></a>
                <a href="#" class="btn btn-danger btn-circle"><i class="fas fa-trash"></i></a> */}
                </td>
              </tr>
            </tbody>
          </Table>

        </div>
      </main>
    </div>
  );
}