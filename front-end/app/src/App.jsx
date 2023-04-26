import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Login from './components/LoginPage';
import UserProfile from './components/UserProfilePage';
import RegistrationPage from './components/UserRegistration';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import './checkoutPage.css'; // Import your CSS file

import CheckoutPage from './StripePayment'


function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path='/user-profile/:id' element={<UserProfile />} />
        <Route path='/user-registration' element={<RegistrationPage />} />
      </Routes>
    </div>
  );
}

export default App;
