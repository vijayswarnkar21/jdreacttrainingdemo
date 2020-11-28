import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginContainer from "./components/login/LoginContainer";
import BasicTable1 from "./components/users/BasicTable1";
import NavBar from "./components/navbar/NavbarComponent";

function App() {
  return (
    <div>
      <div className="container">
        {/* <NavBar /> */}
        <LoginContainer></LoginContainer>
        {/* <BasicTable1></BasicTable1> */}
      </div>
    </div>
  );
}

export default App;
