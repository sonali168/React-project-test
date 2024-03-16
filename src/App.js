import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Home from './components/Home/Home';
import CenterModal from "../src/components/Slidebar/CenterModal"


function App() {
  

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/CenterModal' element={<CenterModal  />}  />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
