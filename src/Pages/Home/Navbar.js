import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }
    var userName = user?.displayName;
    var initials = userName?.charAt(0)

    const navLink = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/blogs'>Blogs</NavLink>
        <NavLink to='/myPortfolio'>My Portfolio</NavLink>

        {user ? <p className='' onClick={handleSignOut}>Sign Out</p> : <NavLink to='/login'>Log in</NavLink>}
        {user && <NavLink to='/dashboard'>Dashboard</NavLink>}
    </>

    return (
        <div>
            <div class="navbar bg-slate-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='text-white'>
                                {navLink}

                            </li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl" >daisyUI</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li>
                            {navLink}

                        </li>
                    </ul>
                </div>

                <div class="navbar-end">
                    <label for="tools-dashboard" tabindex="1" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

                    </label>
                    {/* <label class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                </div>
                <div className='flex'> {user?.displayName}</div>
                {user && <div class="dropdown p-4">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="">

                            <div>
                                {user?.photoURL ? <img className='rounded-full' src={user.photoURL} alt='' /> : <p className='border font-bold w-10 h-10 flex justify-center  items-center rounded-full bg-green-800 text-white  text-3xl uppercase'><div className=' '>
                                    <text>{initials}</text></div></p>}
                            </div>
                        </div>
                    </label>
                    <ul tabindex="3" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-600 text-white rounded-box w-52">
                        <li> {user?.displayName}</li>
                        <li>
                            <a class="justify-between" >
                                <Link to='/dashboard'> Profile</Link>
                                <span class="badge">New</span>
                            </a>
                        </li>

                        <li><a onClick={() => signOut(auth)}>Logout</a></li>
                    </ul>
                </div>}
            </div>
        </div>
    );
};

export default Navbar;