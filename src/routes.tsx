import { 
  BrowserRouter, 
  Switch, 
  Route
} from 'react-router-dom';

import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Company } from './pages/Company';
import { Functionary } from './pages/Functionary';

import { CreateCompany } from './pages/Company/Create';
// import { NewFunctionary } from './pages/Create/NewFunctionary';

import { EditCompany } from './pages/Company/Edit';

function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />

        <Route exact path="/dashboard" component={Dashboard} />

        <Route exact path="/dashboard/company" component={Company} />

        <Route exact path="/dashboard/company/create" component={CreateCompany} />

        <Route exact path="/dashboard/company/edit" component={EditCompany} />

        <Route exact path="/dashboard/functionary" component={Functionary} />

        {/* <Route exact path="/dashboard/functionary/create" component={NewFunctionary} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;