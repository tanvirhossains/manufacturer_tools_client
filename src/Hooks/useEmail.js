import React, { useEffect, useState } from 'react';

const useEmail = (user) => {
    const [token, setToken] = useState('')
    useEffect(() => {

        const userEmail = user?.user?.email
        const newUser = {
            email: userEmail
        }
        if (userEmail) {
            fetch(`https://guarded-scrubland-85783.herokuapp.com/user/${userEmail}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }

    }, [user])


    return [token, setToken]
};

export default useEmail;