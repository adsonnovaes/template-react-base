import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

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

        </div>
      </main>
    </div>
  );
}