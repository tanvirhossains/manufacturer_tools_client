import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { toolId } = useParams()
    const [user] = useAuthState(auth)
    const { register, handleSubmit, formState: { errors } } = useForm();


    const [tool, setTool] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/tools/${toolId}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])


    const { name, img, quantity, minOrder, _id } = tool
    console.log(_id)
    const onSubmit = (data) => {
        // toast(JSON.stringify(data));
        console.log(data)
        toast.success(`you order ${data.quantity} pcs  ${name} `)

        const order = {
            id: _id,
            toolName: name,
            toolImg: img,
            userName: user.displayName,
            userEmail: user.email,
            quantity: data.quantity,
            address: data.address,
            phone: data.phone

        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(value => {
                if(value.success){
                    toast.success(`Your order for ${name} is delivered`)
                }
                else{
                    toast.error("You already order ")
                }
                console.log(value)
            })

    }
    // const order =
    // if (quantity < )

    return (
        <div className='container mx-7'>
            <h1 className='text-3xl text-cyan-500 font-bold text-center m-5'>Purchase page</h1>



            <div className='flex justify-between '>
                <div className=''>
                    <div className='card w-[500px] border h-[500px]'>
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

                            <form action="" className='grid grid-cols-1 ' onSubmit={handleSubmit(onSubmit)}>
                                <label className='label'>
                                    <span className='font-bold '>Name</span>
                                </label>
                                <input type="text" placeholder="Type here" disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                                <label className='label'>
                                    <span className='font-bold '>Email </span>
                                </label>
                                <input type="text" placeholder="Type here" disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
                                <label className='label'>
                                    <span className='font-bold '>Address</span>
                                </label>
                                <input type="text" placeholder="Your Address " name='address' class="input input-bordered w-full max-w-xs"
                                    {...register("address", {
                                        required: true,
                                    })}
                                />
                                {errors.address?.type === 'required' && <p className='text-red-500 font-bold'>Please give Your Address !!</p>}
                                <label className='label'>
                                    <span className='font-bold '>Phone Number</span>
                                </label>
                                <input type="number" placeholder="Phone Number" name='number' class="input input-bordered w-full max-w-xs"
                                    {...register("phone", {
                                        required: true,
                                    })}
                                />
                                {errors.phone?.type === 'required' && <p className='text-red-500 font-bold'>Please give a Phone number</p>}
                                <label className='label'>
                                    <span className='font-bold '>Tools Quantity</span>
                                </label>
                                <input placeholder="Number of Product" type='number' name='quantity' class="input input-bordered w-full max-w-xs"
                                    {...register("quantity", {
                                        required: true,
                                        min: minOrder,
                                        max: quantity,
                                    })} />
                                {errors?.quantity?.type === "required" && <p className='text-red-500 font-bold' >This field is required</p>}
                                {errors?.quantity?.type === "min" && (<p className='text-red-500 font-bold'>please order Minimum {minOrder}</p>)}
                                {errors?.quantity?.type === "max" && (<p className='text-red-500 font-bold'>We Have Only {quantity} pcs</p>)}

                                <input type="submit" className='btn mt-4' value="Order now " />
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase; 