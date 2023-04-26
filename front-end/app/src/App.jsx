import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import RegistrationPage from './pages/UserRegistration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import './assets/styles/checkoutPage.css'; // Import your CSS file
import CheckoutPage from './pages/StripePayment'
import ProductList from './pages/productList';


function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path='/user-profile/:id' element={<UserProfile />} />
        <Route path='/user-registration' element={<RegistrationPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/product-list' element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
