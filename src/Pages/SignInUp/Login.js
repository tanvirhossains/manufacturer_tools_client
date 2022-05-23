import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = event => {
        const email = event.target.email.value
        const password = event.target.password.value

        signInWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <h1 className=' '>login come pages</h1>

      
            <from onSubmit={handleSubmit} action="" >
                <input  type="email" name='email' placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                <br />
                <input  type="password" name='password' placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs my-4" />
                <br />

                <input className='btn' type="submit" value="Log in " />
            </from>
        </div>
    );
};

export default Login;