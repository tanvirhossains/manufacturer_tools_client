import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({ user, index, refetch }) => {
    const { email, role } = user

    const handleAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(value => {
                console.log(value)
                refetch()
                toast.success(`You made a admin to ${email} email user!!!`)
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role === 'admin' ? <kbd class="kbd">Already admin</kbd> : <button class="btn" onClick={handleAdmin}>Create Admin</button>}</td>

        </tr>
    );
};

export default AdminRow;