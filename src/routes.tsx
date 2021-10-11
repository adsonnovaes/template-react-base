import { 
  BrowserRouter, 
  Switch, 
  Route
} from 'react-router-dom';

import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Company } from './pages/Company';

function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />

        <Route exact path="/dashboard" component={Dashboard} />

        <Route exact path="/dashboard/company" component={Company} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;