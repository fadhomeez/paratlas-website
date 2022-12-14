import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from
  'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Demo from './components/pages/Demo';
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ClipLoader } from 'react-spinners';


function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // const handleLoading = () => {
  // setIsLoading(false);
  // }
  
  // useEffect(()=>{
  // window.addEventListener("load",handleLoading);
  // return () => window.removeEventListener("load",handleLoading);
  // },[])
  

  return (
    <>
    <div className="App">
          <Router>
            <Navbar />
            <AnimatePresence>
              <Routes>
                <Route path='/' element=
                  {<Home />} />
                <Route path='/Demo' element=
                  {<Demo />} />
              </Routes>
            </AnimatePresence>
          </Router>
      {/* } */}
    </div>
    </>
  );
}

export default App;
