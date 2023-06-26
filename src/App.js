import './styles/App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from '../src/pages/About'
import Posts from '../src/pages/Posts'
import Navbar from './components/UI/navbar/Navbar';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/posts' element={<Posts />} />
          {/* <Redirect path='/posts' element={<Posts />}/> */}
        </Routes>
    </BrowserRouter>
  )
}

export default App;
