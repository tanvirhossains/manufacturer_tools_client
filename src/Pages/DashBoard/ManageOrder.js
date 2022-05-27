import React, { useEffect, useState } from 'react';
import ManageOneOrder from './ManageOneOrder';

const ManageOrder = () => {
    const [allOrders, setAllOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(value => setAllOrders(value))
    })

    return (
        <div>

            <h1 className='text-center font-bold text-3xl text-primary'>All Order  </h1>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            allOrders.map((order,index)=> <tr>
                            <th>{index + 1}</th>
                            <td>{order.userName}</td>
                            <td>{order.userEmail}</td>
                            <td>{order.toolName}</td>
                            <td>{order.quantity}</td>
                            <td>{order.address}</td>
                            <td>{order.phone}</td>
                        </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageOrder;