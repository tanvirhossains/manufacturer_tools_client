import React from 'react';
import notFound from '../../Images/notfound/notFound.jpg'

const Notfound = () => {
    const myStyle={
        backgroundImage: `url(${notFound})` ,
        height:'100vh',
       
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={myStyle}>
        </div>
    );
};

export default Notfound;