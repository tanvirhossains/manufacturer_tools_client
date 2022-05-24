import { Route, Routes } from 'react-router-dom';
import DashBoard from './Pages/DashBoard/DashBoard';
import Footer from './Pages/Home/Footer';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Home/Navbar';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/SignInUp/Login';
import Register from './Pages/SignInUp/Register';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/purchase/:toolId" element={<Purchase />} />

      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
