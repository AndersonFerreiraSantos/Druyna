import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React, {useState} from 'react'
import '../css/app.css'

import Header from '../../pages/Home/page/Header'
import Home from '../../pages/Home/page/Page'
import Footer from '../../pages/Home/page/Footer'

function App() {

  const [externalPage, setExternalPage] = useState('')

  return (
    <div className='App'>
      <Header setExternalPage = {setExternalPage}/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home externalPage = {externalPage} />} /> 
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
