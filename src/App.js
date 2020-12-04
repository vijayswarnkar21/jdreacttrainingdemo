import './App.css';
import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginContainer from "./components/login/LoginContainer";
import UserList from "./components/users/UserList";
import NavBar from "./components/navbar/NavbarComponent";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import User from "./components/users/User";
//import ProfileComponent from "./components/profile/ProfileComponent";
import UserListV2 from "./components/users/UserListV2";
//import UserListV3 from "./components/users/UserListv3";

//const UserList = lazy(() => import("./components/users/UserList"));
//const User = lazy(() => import("./components/users/User"));
const ProfileComponent = lazy(() => import("./components/profile/ProfileComponent"));
const UserListV3 = lazy(() => import("./components/users/UserListv3"));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <div className="container mt-5">
            <NavBar />
            <Switch>
              <PrivateRoute exact path="/" component={UserList} />
              <PublicRoute path="/login" component={LoginContainer} />
              <PrivateRoute path="/dashboard" component={UserList} />
              <PrivateRoute path="/user/:id" component={User} />
              <PrivateRoute path="/user" component={User} />

              <Suspense fallback={<div>Loading Page....</div>}>
                <PrivateRoute path="/infinitescroll" component={UserListV3} />
                <PrivateRoute path="/profile" component={ProfileComponent} />
              </Suspense>

            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
