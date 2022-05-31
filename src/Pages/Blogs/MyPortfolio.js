import React from 'react';
import pic from '../../Images/my pic/mypic.jpg'

const MyPortfolio = () => {

    return (
        <div className='grid md:grid-cols-1 lg:grid-cols-2 mt-10'>
            <div>
                <img className='w-full p-5' src={pic} alt="" />
            </div>
            <div>
                <h1 className='text-5xl font-bold '> <span>HI HERE !!  </span>  <span className='text text-lime-700'>TANVIR HOSSAIN</span></h1><br />
                <h1 className='text-2xl'><span className='font-bold'>Email:</span> tanvirhossaincou2020@gmail.com</h1>
                <h1 className='text-2xl'><span className='font-bold'>Educational Background:</span> <span>I'm a ARTS background student.I"m a undergraduate student of  Comilla University.Department of <span> Public Administration</span>in 2nd year .</span></h1>
            </div>
            <div>
                <h1 className='text-4xl font-bold text-sky-500 text-center m-5'>MY Skills</h1>
                <h1 className='text-2xl font-bold uppercase'> <span> html , css, tailwindCss,  boostrap, daisyUi, javascript, react, reactQuery ,</span></h1>
            </div>
            <div>
                <h1 className='text-4xl font-bold text-sky-500 text-center'><span>3 website Link </span></h1> 3 website link

            </div>
        </div>
    );
};

export default MyPortfolio;