import React from 'react'

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='login'>
        
            <h1>Sign-in</h1>
        <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={} />


                    <h5>Password</h5>
                    <input type='password' value={password} onChange={} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>
              <p>
                    By signing-in you agree to the our Terma & Conditions. 
                </p>
               <button onClick={register} className='login__registerButton'>Create your Account</button>
        </div>
    )
}

export default LoginPage
