import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import './styles.scss';

export function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlerJoinDashboard(event: FormEvent) {
    event.preventDefault();

    if (email.trim() === '' && password.trim() === '') {
      console.log("opa, não tem informações")
      return;
    }

    console.log("Email: " + email);
    console.log("Senha: " + password);
    history.push('/dashboard');
  }

  return (
    <div id="container">

      <div id="content">

        <div id="content-center">
          <span>Bem Vindo</span>
          <form
            onSubmit={handlerJoinDashboard}
          >

            <div id="fields">
              <Input
                type="text"
                placeholder="Enter Email Address"
                onChange={event => setEmail(event.target.value)}
                value={email}
              />
              <Input 
                type="password"
                placeholder="Password"
                onChange={event => setPassword(event.target.value)}
                value={password}
              />
            </div>

            <div id="bottom-container">
              <Button
                type="submit"
              >
                Login
              </Button>

              <div id="separator"></div>
            </div>
          </form>
        </div>

      </div>

    </div >
  );
}
