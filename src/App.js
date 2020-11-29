import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginContainer from "./components/login/LoginContainer";
import BasicTable1 from "./components/users/BasicTable1";
import NavBar from "./components/navbar/NavbarComponent";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';

function App() {
  return (
    <Provider store={store}>
      
      <BrowserRouter>
        <div>
          <div className="container mt-5">
          <NavBar />
            <Switch>
              <PrivateRoute exact path="/" component={BasicTable1} />
              <PublicRoute path="/login" component={LoginContainer} />
              <PrivateRoute path="/dashboard" component={BasicTable1} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
