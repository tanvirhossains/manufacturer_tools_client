import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { toolId } = useParams()

    const [user] = useAuthState(auth)

    console.log(user)
    const [tool, setTool] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/tools/${toolId}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])


    const { name, img, quantity, minOrder } = tool
    return (
        <div className='container mx-7'>
            <h1 className='text-3xl text-cyan-500 font-bold text-center m-5'>Purchase page</h1>

            <div className='flex justify-between '>
                <div className=''>
                    <div className='card w-[500px] border h-screen'>
                        <img className='h-[300px]' src={img} alt="" />

                        <div className='m-4'>
                            <h1 className='text-2xl font-bold text-blue-400'>Name: {name}</h1>
                            <h1 className='text-1xl font-bold text-red-400'>Minimum Order: {minOrder} </h1>
                            <h1>Available quantity : <span className='text-red-600 font-bold'>({quantity} in stoke )</span></h1>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class=" text-center text-indigo-700 font-bold text-2xl"> User Information</h2>

                            <input type="text" placeholder="Type here" disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                            <input type="text" placeholder="Type here" disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
                            <input type="text" placeholder="Your Address" class="input input-bordered w-full max-w-xs" />
                            <input type="number" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                            <div class="card-actions justify-center">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase; 