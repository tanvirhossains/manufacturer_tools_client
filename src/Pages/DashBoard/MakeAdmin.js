import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {

    const { data: usersEmail, isLoading , refetch} = useQuery('usersEmail', () => fetch(`https://guarded-scrubland-85783.herokuapp.com/user`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

  
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
                            <th>Admin </th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            usersEmail.map((user, index) => <AdminRow
                            index={index}
                            user={user}
                            refetch={refetch}></AdminRow>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;