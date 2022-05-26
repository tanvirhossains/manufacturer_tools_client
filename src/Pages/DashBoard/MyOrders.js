import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [myOrder, setMyOrder] = useState([])
    const [user] = useAuthState(auth)

    useEffect(() => {
        // if (user) {

        fetch(`http://localhost:5000/order?userEmail=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrder(data)
                console.log(data)
            })
        // }
    }, [user])

    return (
        <div>
            <h1 className='text-center font-bold text-2xl my-5'>My orders List</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>NO.</th>
                            <th>Name</th>
                            <th>tool</th>
                            <th>Email</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            myOrder.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.userName}</td>
                                <td>{order.toolName}</td>
                                <td>{order.userEmail}</td>
                                <td>{order.quantity}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;