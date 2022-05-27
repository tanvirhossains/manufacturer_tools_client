import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div>
            <div class="drawer  lg:drawer-mobile">
                <input id="tools-dashboard" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content bg-slate-300">
                    {/* <!-- Page content here --> */}
                    <h1 className='Text-center text-white text-center p-5 font-bold text-2xl w-full bg-slate-600'> Dashboard</h1>
                    <Outlet></Outlet>

                </div>
                <div class="drawer-side">
                    <label for="tools-dashboard" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <Link to='/dashboard'>My Profile</Link>
                        <Link to='/dashboard/addReview'>Add A Review</Link>
                        <Link to='/dashboard/myOrders'>My Orders</Link>

                        <Link to='/dashboard/addProduct'>Add a Product</Link>
                        <Link to='/dashboard/manageOrder'>Manage All Order</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;