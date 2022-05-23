import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    let setError

    const handleSubmit = event => {
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        createUserWithEmailAndPassword(email, password)
        toast.success('You are Registered successfully')
    }
    if (error || gError) {
        setError = <p>Error: {error?.message}</p>
    }

    return (
        <div className=''>

            <div className=' h-screen flex justify-center items-center '>
                <div className="cart shadow-xl p-10 rounded-lg ">
                    <h1 className='text-3xl '>Please Register  </h1>

                    <form onSubmit={handleSubmit} action="" >
                        <label class="label">
                            <span class="label-text">Give Your Name Please</span>
                        </label>
                        <input type="name" name='name' placeholder="Type Your Name" class="input input-bordered input-primary w-full " />
                        <label class="label">
                            <span class="label-text">Give Your Email Please</span>
                        </label>
                        <input type="email" name='email' placeholder="Type Your Email" class="input input-bordered input-primary w-full " />
                        <br />
                        <label class="label">
                            <span class="label-text">Give Your Password Please</span>
                        </label>
                        <input type="password" name='password' placeholder="Type here" class="input input-bordered input-primary w-full  my-4" />
                        <br />
                        <p className='text-1xl text-red-500 font-bold'> {setError}</p>
                        <input className='btn w-full' type="submit" value="Log in " />
                    </form>

                    <h1>Have an account? <Link to='/login' className='text-2xl text-orange-500'> Log in</Link></h1>
                    <div class="divider">OR</div>
                    <button className='btn btn-outline w-full' onClick={() => signInWithGoogle()}>Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Register;