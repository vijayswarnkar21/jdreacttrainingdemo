import React from 'react';
import "./navBarComponent.css"
import { connect } from 'react-redux';
import { logout } from '../../redux';
import { withRouter } from 'react-router-dom'

const NavbarComponent = (props) => {
    const logout = () => {
        props.logout();
        props.history.push('/login');
    }

    return (
        props.userData.isLoggedIn ?
        <div className="spacer">
            <div className="navbar">
                <button onClick = {logout} className= "brand"> Logout</button>
                <a href = "#" className= "brand"> Create</a>
                <a href = "/dashboard" className= "brand"> Dashboard</a>
                <span className= "brand"> {props.userData.user.data.userInfo.name}</span>
            </div>
        </div> : ''
    );
}
const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}

const mapDispathchToProps =  (dispatch) => {
    return {
        logout : () => dispatch(logout())
    }
}

export default connect
(mapStateToProps,mapDispathchToProps)
(withRouter(NavbarComponent))
