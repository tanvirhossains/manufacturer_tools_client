import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Home/Footer';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Home/Navbar';
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
      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
