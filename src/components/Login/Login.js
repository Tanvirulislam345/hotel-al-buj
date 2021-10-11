import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    // console.log('came from', location.state?.from);
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                // console.log(result.user);
                history.push(redirect_uri);
            }).catch(error => {
                console.log(error.message);
            });
    }
    return (
        <div className="login-form">
            <div>
                <h1>Login form</h1>
                <form action="">
                    <input type="email" name="" id="email" placeholder="Enter your email" /><br /> <br />
                    <input type="password" name="" id="password" placeholder="Enter your password" /><br /><br />
                    <input type="submit" value="Log In" />
                </form>
                <div style={{ marginTop: '20px' }}>

                    <img src="https://img.icons8.com/office/40/000000/google-logo.png"
                        alt="google"
                        className="icons"
                        onClick={handleGoogleLogIn}
                    />

                    <img src="https://img.icons8.com/office/40/000000/google-logo.png"
                        alt="google"
                        style={{ marginLeft: "20px" }}
                        className="icons"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;