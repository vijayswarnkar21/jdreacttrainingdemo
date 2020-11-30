import React from 'react';
import { connect } from 'react-redux';
import logo from '../../avatar.png';

const ProfileComponent = (props) => {
    console.log("props---------------------------------->", props);
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    Profile
            </div>
                <div className="card-body">
                    <div class="row">
                        <img src={logo} alt="Avatar" className="avatar" />
                    </div>
                    <div className="form-group mt-5">
                        <h5>Name:{props.userData.user.data.userInfo.name}</h5>
                        <h5>User name:{props.userData.user.data.userInfo.username}</h5>
                        <h5>Role:{props.userData.user.data.userInfo.role}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}


export default connect
    (mapStateToProps)
    (ProfileComponent)