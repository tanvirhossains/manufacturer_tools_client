import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const review = {
            name: data.tool,
            price: parseInt(data.price),
            quantity: parseInt(data.quantity),
            minOrder: parseInt(data.minium),
            description: data.description,
            img: data.imgUrl
        }

        fetch(`http://localhost:5000/tools`, {
            method: 'POST',
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(value => {
                if (value.success) {
                    toast.success(`you Add a product to the database `)
                }
            })
    }

    return (
        <div className='flex justify-center items-center'>
            <div>
                <h1>Add a review</h1>
                <form action="" className=' ' onSubmit={handleSubmit(onSubmit)}>


                    <label className='label'>
                        <span className='font-bold '>Tool Name</span>
                    </label>
                    <input type="text" placeholder="Tool Name " name='tool' class="input input-bordered w-full max-w-xs"
                        {...register("tool", {
                            required: true,
                        })}
                    />
                    {errors.tool?.type === 'required' && <p className='text-red-500 font-bold'>Please give Your tool Name !!</p>}
                    <label className='label'>
                        <span className='font-bold '>Price</span>
                    </label>
                    <input type="number" placeholder="Price of Product" name='price' class="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: true,
                            value: Number,
                            min: 1,
                        })}
                    />
                    {errors.price?.type === 'required' && <p className='text-red-500 font-bold'>Please give Your price !!</p>}
                    <label className='label'>
                        <span className='font-bold '>Quantity</span>
                    </label>
                    <input type="number" placeholder="quantity of Product" name='quantity' class="input input-bordered w-full max-w-xs"
                        {...register("quantity", {
                            required: true,
                            value: Number,
                            min: 1,
                        })}
                    />
                    {errors.quantity?.type === 'required' && <p className='text-red-500 font-bold'>Please give Your quantity !!</p>}
                    <label className='label'>
                        <span className='font-bold '>Minium Order</span>
                    </label>
                    <input type="number" placeholder="minium of Product" name='minium' class="input input-bordered w-full max-w-xs"
                        {...register("minium", {
                            required: true,
                            value: Number,
                            min: 1,
                        })}
                    />
                    {errors.minium?.type === 'required' && <p className='text-red-500 font-bold'>Please give Your Minimum Order !!</p>}
                    <label className='label'>
                        <span className='font-bold '>Description </span>
                    </label>
                    <textarea class="textarea textarea-bordered w-full max-w-xs" placeholder="Bio"
                        {...register("description", {
                            required: true,
                        })} />
                    {errors.description?.type === 'required' && <p className='text-red-500 font-bold'>Please give Your Product Description </p>} <br />

                    <label className='label'>
                        <span className='font-bold '>Image Url using ImageBB </span>
                    </label>
                    <input type="text" placeholder="image url " name='ingUrl ' class="input input-bordered w-full max-w-xs"
                        {...register("imgUrl", {
                            required: true,
                            pattern: /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
                        })}
                    />
                    {errors.imgUrl?.type === 'required' && <p className='text-red-500 font-bold'>Please give Your Product url</p>} <br />
                    {errors.imgUrl?.type === 'pattern' && <p className='text-red-500 font-bold'>Please give accrate url</p>} <br />

                    <input type="submit" className='btn mt-4' value="Submit Review " />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;