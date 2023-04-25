import './App.css';
import './index.css';
import NavBar from './componests/nav/nav';
import React from 'react';


import ProductCards from './componests/Productcheckout/ProductcheckOut';

import Footer from './componests/footer/footer'
// import ProductCards from './componests/productCheckOut2/checkOut'

function App() {
  return (
    <div className="App">
     {/* <header>
      <NavBar fixed="top" />
      </header> */}
      <main>
      <ProductCards />
      </main>
      
      {/* <footer>
        <Footer fixed ="botton"/>
        </footer> */}
    </div>
  )
}

export default App
