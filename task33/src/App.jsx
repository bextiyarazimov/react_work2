
import './App.css';
import Header from './components/common/Header/Header';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Men from './components/pages/Men/Men';
import Women from './components/pages/Women/Women';


import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './components/pages/Product/Product';
import ProductDetail from './components/pages/Product/ProductDetail';
import NotFound from './components/pages/NotFound/NotFound';
import {useParams}  from "react-router";


function App() {

  const params = useParams();
  console.log({params});

 
  return ( 
     <>
     <Router>
  <Header />

<Routes>

<Route  path="/" element={<Home/>} />
<Route  path="/about" element={<About/>} />
<Route  path="/contact" element={<Contact/>} />
<Route  path="/men" element={<Men/>} />
<Route  path="/women" element={<Women/>} />
<Route  path="/products" element={<Product/>} />
<Route  path="/products/:id" element={<ProductDetail/>} />
<Route  path="*" element={<NotFound/>} />
</Routes>
  </Router>
{/* 
  <Footer /> */}
    </>
  );
}

export default App
