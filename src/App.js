import { Route, Routes } from 'react-router-dom';
import AddReview from './Pages/DashBoard/AddReview';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyOrders from './Pages/DashBoard/MyOrders';
import MyProfile from './Pages/DashBoard/MyProfile';
import Footer from './Pages/Home/Footer';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Home/Navbar';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/SignInUp/Login';
import Register from './Pages/SignInUp/Register';
import RequireAuth from './RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from './Pages/DashBoard/AddProduct';
import ManageOrder from './Pages/DashBoard/ManageOrder';
import MakeAdmin from './Pages/DashBoard/MakeAdmin';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/purchase/:toolId" element={<RequireAuth>
          <Purchase />
        </RequireAuth>} />


        <Route path="dashboard" element={<RequireAuth>  <DashBoard /></RequireAuth>} >
          <Route index element={<MyProfile />} />
          <Route path='addReview' element={<AddReview />} />
          <Route path='myOrders' element={<MyOrders />} />
          <Route path='addProduct' element={<AddProduct />} />
          <Route path='manageOrder' element={<ManageOrder />} />
          <Route path='makeAdmin' element={<MakeAdmin />} />
        </Route>
      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
