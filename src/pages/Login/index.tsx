// import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import './styles.scss';

type LoginProps = {
  email: string;
  password: string;
}

export function Login() {
  const history = useHistory();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  async function handlerJoinDashboard(data: LoginProps) {

    if (data.email.trim() === '' && data.password.trim() === '') {
      return;
    }

    // console.log("Email: " + email);
    // console.log("Senha: " + password);
    history.push('/dashboard');
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('*O email é obrigatório'),
    password: Yup.string().required('*A senha é obrigatório')
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit: (data) => {
      handlerJoinDashboard(data);
    }
  })

  return (
    <div id="container">

      <div id="content">

        <div id="content-center">
          <span>Bem Vindo</span>
          <form
            onSubmit={formik.handleSubmit}
          >

            <div id="fields">
              <div style={{ height: "65px" }}>
                <Input
                  name="email"
                  type="text"
                  placeholder="Enter Email Address"
                  // onChange={event => setEmail(event.target.value)}
                  onChange={formik.handleChange}
                  // value={email}
                  value={formik.values.email}
                  hasError={formik.errors.password != null}
                />
                <span>{formik.errors.email ? formik.errors.email : null}</span>
              </div>
              <div style={{ height: "65px" }}>
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  // onChange={event => setPassword(event.target.value)}
                  onChange={formik.handleChange}
                  // value={password}
                  value={formik.values.password}
                />
                <span>{formik.errors.password ? formik.errors.password : null}</span>
              </div>
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
