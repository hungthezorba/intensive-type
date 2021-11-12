import React from 'react';
import { routes } from './routes';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          {routes.map(r => (
            <Route path={r.path} component={r.component}/>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
