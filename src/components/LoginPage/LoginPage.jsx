import React, { useState } from 'react'

import { useHistory } from "react-router";
import { Link } from "react-router-dom";

// contexts
import { useAuth } from "../../contexts/AuthContext";

function LoginPage() {

// routers
const history = useHistory();

// fields defined
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

// auth contexts callings
const { login, signupWithGoogle } = useAuth();

// Form submition
// Form Submition with Email and Password
const handleLoginSubmit = async (e) => {
  e.preventDefault();
  try {
    await login(email, password);
    history.push("/profile");
  } catch {
    window.alert("Login Failed");
  }
};

// Form submition with google login
const handleSubmitWithGoogle = async (e) => {
  e.preventDefault();

  try {
    await signupWithGoogle();
    history.push("/profile");
  } catch {
    window.alert("Login with google failed");
  }
};


    return (
        <div className='login'>
        
            <h1>Sign-in</h1>
        <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />


                    <h5>Password</h5>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button type='submit' onClick={handleLoginSubmit} className='login__signInButton'>Sign In</button>
                </form>
              <p>
                    By signing-in you agree to the our Terma & Conditions. 
                </p>
               <button className='login__registerButton'>Create your Account</button>
        </div>
    )
}

export default LoginPage
