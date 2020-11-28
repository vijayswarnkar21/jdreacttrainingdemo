import React, { useState } from 'react';

const LoginContainer = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const message = "";

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = () => {

    }
    return (
        <React.Fragment>
            <div class="row mt-5">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Sign In</h5>
                            <form class="form-signin">
                                <div className="form-label-group">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        value={username}
                                        onChange={onChangeUsername}
                                    ></input>
                                </div>

                                <div className="form-label-group mt-3">
                                    <label htmlFor="password">password</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="password"
                                        value={password}
                                        onChange={onChangePassword}
                                    ></input>
                                </div>

                                <div className="form-label-group">
                                    <button onClick={handleLogin} className="mt-5 btn btn-lg btn-primary btn-block text-uppercase"
                                     disabled={loading}>
                                        {loading && (
                                            <span className="spinner-border spinner-border-sm"></span>
                                        )}
                                        <span>Login</span>
                                    </button>
                                </div>

                                {
                                    message && (
                                        <div className="form-label-group">
                                            <div className="alert alert-danger" role="alert">
                                                {message}
                                            </div>
                                        </div>
                                    )
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LoginContainer;
