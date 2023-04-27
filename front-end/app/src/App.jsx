import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import RegistrationPage from './pages/UserRegistration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CheckoutPage from './pages/StripePayment';
import ProductList from './pages/ProductList';
import './App.css'
import Footer from './components/Footer';
// import CheckoutPage from './StripePayment'
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="wrapper">
      < NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path='/user-profile/:id' element={<UserProfile />} />
        <Route path='/user-registration' element={<RegistrationPage />} />
        {/* <Route path='/checkout' element={<CheckoutPage />} /> */}
        {/* <Route path='/product-list' element={<ProductList />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
