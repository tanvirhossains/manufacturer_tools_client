import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [user] = useAuthState(auth)

    const onSubmit = data => {

        const review = {
            name: user.displayName,
            email: user.email,
            tool: "shovel",
            customerReview: data.description,
            date: data.date,
            img: user.photoURL
        }
        // const date = new Date()

        fetch(`http://localhost:5000/reviews`, {
            method: 'POST',
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(value => {
                if (value.success) {
                    toast.success(`you send a review `)
                }
            })

    }
    return (
        <div className='flex justify-center items-center'>
            <div>
                <h1>Add a review</h1>
                <form action="" className=' ' onSubmit={handleSubmit(onSubmit)}>
                    <label className='label'>
                        <span className='font-bold '>Name</span>
                    </label>
                    <input type="text" placeholder="Type here" disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                    <label className='label'>
                        <span className='font-bold '>Email </span>
                    </label>
                    <input type="text" placeholder="Type here" disabled value={user?.email} class="input input-bordered w-full " />
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
                        <span className='font-bold '>date</span>
                    </label>
                    <input type="date" placeholder="date" name='date' class="input input-bordered w-full max-w-xs"
                        {...register("date", {
                            required: true,
                        })}
                    />
                    {errors.date?.type === 'required' && <p className='text-red-500 font-bold'>Please give Your date !!</p>}
                    <label className='label'>
                        <span className='font-bold '>Description </span>
                    </label>
                    <textarea class="textarea textarea-bordered w-full max-w-xs" placeholder="Bio"
                        {...register("description", {
                            required: true,
                        })} />
                    {errors.description?.type === 'required' && <p className='text-red-500 font-bold'>Please give Your Review </p>} <br />

                    <input type="submit" className='btn mt-4' value="Submit Review " />
                </form>
            </div>
        </div>
    );
};

export default AddReview;