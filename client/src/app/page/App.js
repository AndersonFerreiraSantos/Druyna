import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import '../css/app.css'
import AuthService from '../../database/authService'


import Header from '../../pages/Home/page/Header'
import Home from '../../pages/Home/page/Page'
import Footer from '../../pages/Home/page/Footer'
import City from '../../pages/City/city/page/ Kingdom'
import Loading from '../../components/loadding/component/Loading'

import Context from '../context/context'

import fieldService from '../../services/fields/fieldService'

function App() { 

  const [isLoadingLoggerUser, setIsLoadingLoggerUser] = useState(true)
  const [internalPage, setInternalPage] = useState('')
  const [externalPage, setExternalPage] = useState('')
  const [user, setUser] = useState(null)
  const [fields, setFields] = useState(null)



  useEffect(() => {
    setIsLoadingLoggerUser(true)

    AuthService.getLoggerUser().then((user) => {
      fieldService.getFields().then((result) => {
        setFields(result)
        setIsLoadingLoggerUser(false)
      })

      setUser(user)
    }).catch(() => {
      setIsLoadingLoggerUser(false)
    })
  }, [])

  return (
    <>
      <div className='App'>
        { !isLoadingLoggerUser && 
        <Context.Provider value={{user, setUser, fields, setFields}} >
          <BrowserRouter>
            <Header setExternalPage = {setExternalPage} setInternalPage = {setInternalPage} user = {user} />
              <Routes>
                <Route path = '/' element = {<Navigate to = '/home' /> } />
                <Route path='/home' element={!user ? <Home externalPage = {externalPage} /> : <Navigate to ='/city' />} /> 
                <Route path='/city' element = {user ? <City internalPage = {internalPage} /> : <Navigate to = '/home' /> } />
              </Routes>
            <Footer />
          </BrowserRouter>
        </Context.Provider> }
        
    </div>
    {isLoadingLoggerUser && <Loading />}
    </>
  );
}

export default App;
