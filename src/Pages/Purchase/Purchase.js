import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { toolId } = useParams()
    const [user] = useAuthState(auth)
    const {
        register, handleSubmit, watch, formState: { errors } } = useForm();


    console.log(user)
    const [tool, setTool] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/tools/${toolId}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])


    const { name, img, quantity, minOrder } = tool

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }
    // const order =
    // if (quantity < )

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
                            <h1>Available quantity : {quantity < 100 ? <span className='text-green-600 font-bold'>({quantity} in stoke )</span> :
                                <span> {quantity}</span>}</h1>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class=" text-center text-indigo-700 font-bold text-2xl"> User Information</h2>

                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" placeholder="Type here" disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                                <input type="text" placeholder="Type here" disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
                                <input type="text" placeholder="Your Address" class="input input-bordered w-full max-w-xs" />
                                <input type="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs"
                                {...register("phone", {
                                    required: true,
                                })}
                                 />
                                 {errors.phone?.type === 'required' && <p>Please give a Phone number</p>}
                                


                                <input placeholder="order" class="input input-bordered w-full max-w-xs"
                                    {...register("number", {
                                        required: true,
                                        min: minOrder,
                                        max: quantity,

                                    })}
                                />
                                {errors?.number?.type === "required" && <p>This field is required</p>}
                                {errors?.number?.type === "min" && (<p>please order Minimum {minOrder}</p>)}
                                {errors?.number?.type === "max" && (<p>product {quantity}</p>)}

                                <input type="submit" value="Order now " />
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase; 