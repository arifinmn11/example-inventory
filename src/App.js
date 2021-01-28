import './App.css';
import routes from './configs/routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './configs/store';
import Nav from "./components/navbar"



function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Switch>
              {
                routes.map((e, i) => {
                  return (
                    <Route exact={e.exact} key={i} path={e.path}>
                      {e.component}
                    </Route>
                  )
                })
              }
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
