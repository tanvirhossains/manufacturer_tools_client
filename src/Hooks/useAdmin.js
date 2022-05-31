import { useEffect, useState } from 'react';

const useAdmin = (emailUser) => {
    const [admin, setAdmin] = useState(false)
    useEffect(() => {
        const email = emailUser?.email
        if (email) {
            fetch(`https://guarded-scrubland-85783.herokuapp.com/admin/${email}`, {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                    console.log(data.admin)
                })
        }


    }, [emailUser])
    return [admin]
};

export default useAdmin;