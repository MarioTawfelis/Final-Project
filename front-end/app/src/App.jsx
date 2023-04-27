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
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Error404 from './pages/errorPage';
import Contact from './pages/contact';


function App() {
  return (
    <div className="wrapper">
      < NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path='/user-profile/:id' element={<UserProfile />} />
        <Route path='/user-registration' element={<RegistrationPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/product-list' element={<ProductList />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
