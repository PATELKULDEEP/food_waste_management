import React, { useState } from 'react'


import { useHistory } from "react-router";

// contexts
import { useAuth } from "../../contexts/AuthContext";


function SignupPage() {
// routers
const history = useHistory();

// fields defined
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [fullname, setFullname] = useState("");
const [servicesProvider, setServicesProvider] = useState(false);

// auth contexts callings
const { signup, signupWithGoogle } = useAuth();

// Form submition
// Form Submition with Email and Password
const handleSignupSubmit = async (e) => {
  e.preventDefault();
  try {
    await signup(email, password, fullname, servicesProvider);
    history.push("/profile");
  } catch {
    window.alert("Signup Failed");
  }
};

// Form submition with google login
const handleSubmitWithGoogle = async (e) => {
  e.preventDefault();

  try {
    await signupWithGoogle();
    history.push("/profile");
  } catch {
    window.alert("Signup with google failed");
  }
};


    return (
        <div className='login'>
        
            <h1>Sign-Up</h1>
        <form>
                     <label>Full Name </label>
                    <input type='text' value={fullname} onChange={(e) => setFullname(e.target.value)} />


                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />


                    <h5>Password</h5>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button type='submit' onClick={handleSignupSubmit} className='login__signInButton'>Sign up</button>
                </form>
              <p>
                    By signing-in you agree to the our Terma & Conditions. 
                </p>
               <button className='login__registerButton'>Create your Account</button>
        </div>
    )
}

export default SignupPage
