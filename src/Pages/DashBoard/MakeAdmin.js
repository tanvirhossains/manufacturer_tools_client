import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const MakeAdmin = () => {

    const{data: usersEmail , isLoading} = useQuery('usersEmail', () => fetch(`http://localhost:5000/user`).then(res => res.json()))

    if(isLoading){
        return<Loading></Loading>
    }
    // const [usersEmail, setUsersEmail] = useState([])
    // useEffect(() => {
    //     fetch(`http://localhost:5000/user`)
    //         .then(response => response.json())
    //         .then(value => setUsersEmail(value))
    // }, [])
    return (
        <div>
            <h1 className='text-center font-bold text-2xl my-5'>Make Admin Page</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>NO.</th>
                            <th>Email</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            usersEmail.map((email, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{email.email}</td>

                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;