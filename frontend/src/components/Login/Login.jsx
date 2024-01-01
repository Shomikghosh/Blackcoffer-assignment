import React from "react";
import './login.css';
import { Link } from "react-router-dom";

const Login =()=>{
    return(
        <div class="container">
        <Link to="/dashboard"> <button type="button" class="btn clr-white classy">Dashboard </button></Link>
        </div>
    );
};

export default Login;