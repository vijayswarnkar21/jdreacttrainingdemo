import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
//import { userUpdateSuccess } from '../../redux';
import UserSevice from "../../services/user-service";

const User = (props) => {

    const [user, setUser] = useState({
        id: "",
        name: "",
        department: "",
        designation: ""
    });
    const [errrorMessage, setErrrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const changeUserData = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        let _user = null;
        if (props.match && props.match.params && props.match.params.id) {
            _user = props.userListData.find(x => x.id == props.match.params.id);
            if (!_user) {
                props.history.push(`/dashboard`);
            } else {
                setUser({
                    id: _user.id,
                    name: _user.name,
                    department: _user.department,
                    designation: _user.designation
                })
            }
        }
    }, [])

    const onSubmit = (e) => {
        if(!user || !user.name || !user.department || !user.designation){
            setErrrorMessage("All fields are required");
            e.preventDefault();
            return;
        }
        setLoading(true);
        if (user.id) {
            UserSevice.updateUser(user).then(response => {
                if (response.data.success) {
                    setLoading(false);
                    setErrrorMessage(null);
                    props.history.push(`/dashboard`);
                }
            })
        } else {
            UserSevice.createUser(user).then(response => {
                if (response.data.success) {
                    setLoading(false);
                    setErrrorMessage(null);
                    props.history.push(`/dashboard`);
                }
            })
        }

        //howto chnage single item on redux itemlist?

        //setLoading(true);
        //props.userUpdateSuccess(user);
        //setLoading(false);

    }

    return (
        <div className="card">
            <div className="card-header">
                Create User
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" maxLength={30} className="form-control" name="name"
                            value={user.name} onChange={changeUserData} />
                    </div>
                    <div className="form-group">
                        <label>Department:</label>
                        <input type="text" maxLength={30} className="form-control" name="department"
                            value={user.department} onChange={changeUserData} />
                    </div>
                    <div className="form-group">
                        <label>Designation:</label>
                        <input type="text"  maxLength={30} className="form-control" name="designation"
                            value={user.designation} onChange={changeUserData} />
                    </div>
                    <button disabled={loading} onClick={onSubmit} className="btn btn-primary">Submit</button>
                    {
                                    errrorMessage && (
                                        <div className="form-label-group">
                                            <div className="alert alert-danger mt-3" role="alert">
                                                {errrorMessage}
                                            </div>
                                        </div>
                                    )
                    }
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userListData: state.userList.userList
    }
}

// const mapDispathchToProps = (dispatch) => {
//     return {
//         userUpdateSuccess: (user) => dispatch(userUpdateSuccess(user))
//     }
// }

export default connect
    (mapStateToProps)
    (User)

