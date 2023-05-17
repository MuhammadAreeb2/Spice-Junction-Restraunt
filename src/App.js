
import React from 'react';
import Home from "./components/home"
import Menu from "./components/menu"
import Story from "./components/ourstory"
import Contact from "./components/contactus"
import Footer from "./components/footer"
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    
    <>
    {/* <Routes>  
    <Route path='/Home' element={<Home />}/> 
      <Route path='/' element={<Home />}/> 
    <Route path='/Menu'  element={<Menu/>} />
    <Route path='/Our Story' element={<Story/>} />
    
    <Route path='/Contact Us' element={<Contact/>} />
    <Route path='/Footer' element={<Footer/>} /> */}
    
    
     <Home/> 
     <Menu/>
   <Story/>
    <Contact/> 
       <Footer/>
    {/* </Routes> */}

    </>
  );
}

export default App;
