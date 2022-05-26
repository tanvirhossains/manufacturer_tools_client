import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FaBeer } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const MyProfile = () => {
    const [user] = useAuthState(auth)

    var userName = user?.displayName;
    var initials = userName?.charAt(0)

    return (
        <div>
            <h1 className='text-center text-3xl font-bold text-teal-500 uppercase my-5'>My Profile</h1>

            <div>
                <div>
                    <div className='flex justify-center items-center'>
                        <div>
                            {user?.photoURL ? <img className='lg:w-64 md:w-48 rounded-full' src={user.photoURL} alt='' /> : <p className='border font-bold lg:w-64 md:w-48 md:h h-64 flex justify-center  items-center rounded-full bg-green-800 text-white  text-9xl uppercase'><div className=' '>
                                <text>{initials}</text></div></p>}
                            <form action="">
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text font-bold text-1xl">What is your name?</span>
                                    </label>
                                    <input type="text" placeholder="NAME" class="input input-bordered w-full max-w-xs" />
                                    <label class="label">
                                        <span class="label-text font-bold text-1xl">Bio</span>
                                    </label>
                                    <textarea class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                                    <label class="label">
                                        <span class="label-text font-bold text-1xl">What is your name?</span>
                                    </label>
                                    <div className='flex items-center'>
                                        {/* <a className'> <AiFillLinkedin className='h-4' width="24" height="24" /></a> */}
                                        {/* <FontAwesomeIcon width="24" height="24" icon='facebook'></FontAwesomeIcon> */}
                                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                                        <input type="text" placeholder="twitter" class="input input-bordered w-full max-w-xs ml-3" />
                                    </div>
                                    <div className='flex items-center'>
                                        {/* <a className'> <AiFillLinkedin className='h-4' width="24" height="24" /></a> */}
                                        {/* <FontAwesomeIcon width="24" height="24" icon='facebook'></FontAwesomeIcon> */}
                                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                                        <input type="text" placeholder="twitter" class="input input-bordered w-full max-w-xs ml-3" />
                                    </div>



                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;