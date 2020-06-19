import React from 'react';
import './login.css';
import LinkedIn from '../Container/index';

class Login extends React.Component
{
       
    render(){
        return (
            <div className="wrapper">
                <h2>Login</h2>
                <div className="inner">
                <input type="text" placeholder="Enter UserId"/> 
                <input type="password" placeholder="Enter Password"/>
                </div>
                <button className="button">Login</button>
                <LinkedIn/>
            </div>
        );
    }

}

export default Login;