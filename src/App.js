import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginContainer from "./components/login/LoginContainer";
import BasicTable1 from "./components/users/BasicTable1";
import NavBar from "./components/navbar/NavbarComponent";
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="container">
          {/* <NavBar /> */}
          <LoginContainer></LoginContainer>
          {/* <BasicTable1></BasicTable1> */}
        </div>
      </div>
    </Provider>
  );
}

export default App;
