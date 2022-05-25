import React from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
const Login = () => {


    const [user] = useAuthState(auth);
    const [
        signInWithEmailAndPassword, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gLoading, gError] = useSignInWithGoogle(auth);


    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let setError

    const handleSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value

        signInWithEmailAndPassword(email, password)
        toast.success('You are log in')

    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (error || gError) {
        setError = <p>Error: {error?.message}</p>
    }

    if (loading || gLoading) {
        return <Loading></Loading>
    }


    return (
        <div className=''>

            <div className=' h-screen flex justify-center items-center '>
                <div className="cart shadow-xl p-10 rounded-lg ">
                    <h1 className='text-3xl '>Please Login  </h1>

                    <form onSubmit={handleSubmit} action="" >
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

                    <h1>Do you want to register? <Link to='/register' className='text-2xl text-orange-500'> Register</Link></h1>
                    <div class="divider">OR</div>
                    <button className='btn btn-outline w-full' onClick={() => signInWithGoogle()}>Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;