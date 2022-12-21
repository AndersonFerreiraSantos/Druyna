import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import '../css/app.css'
import AuthService from '../../database/authService'


import Header from '../../pages/Home/page/Header'
import Home from '../../pages/Home/page/Page'
import Footer from '../../pages/Home/page/Footer'
import City from '../../pages/City/city/component/City'
import Loading from '../../components/loadding/component/Loading'


function App() {

  const [isLoadingLoggerUser, setIsLoadingLoggerUser] = useState(true)
  const [externalPage, setExternalPage] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    AuthService.getLoggerUser().then((user) => {
      setIsLoadingLoggerUser(false)
      setUser(user)
    }).catch(() => {
      setIsLoadingLoggerUser(false)
    })
  }, [])

  return (
    <>
      <div className='App'>
        {!isLoadingLoggerUser && <BrowserRouter>
          <Header setExternalPage = {setExternalPage}/>
          <Routes>
            <Route path='/' element={!user ? <Home externalPage = {externalPage} /> : <Navigate to ='/city' />} /> 
            <Route path='/city' element = {user ? <City /> : <Navigate to = '/' /> } />
          </Routes>
          <Footer />
        </BrowserRouter>}
    </div>
    {isLoadingLoggerUser && <Loading />}
    </>
  );
}

export default App;
