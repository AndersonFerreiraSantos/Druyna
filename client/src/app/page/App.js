import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import '../css/app.css'
import AuthService from '../../database/authService'


import Header from '../../pages/Home/page/Header'
import Home from '../../pages/Home/page/Page'
import Footer from '../../pages/Home/page/Footer'
import City from '../../pages/City/city/page/ Kingdom'
import Loading from '../../components/loadding/component/Loading'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {context} from '../context/context'

import fieldService from '../../services/fields/fieldService'

function App() { 

  const [isLoadingLoggerUser, setIsLoadingLoggerUser] = useState(true)
  const [internalPage, setInternalPage] = useState('')
  const [externalPage, setExternalPage] = useState('')

  //contexts
  const [user, setUser] = useState(null)
  const [fields, setFields] = useState(null)
  const [modalEdification, setModalEdification] = useState({status: true})

  function statusModal(component){
    if(modalEdification.status === true){
        setModalEdification({...modalEdification, status : false})
    }else{
      setModalEdification({...modalEdification, status : true,  component : component})
    }
}


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
        <DndProvider backend={HTML5Backend} >

      <div className='App'>
        { !isLoadingLoggerUser && 
          <context.Provider value={{user, setUser, fields, setFields, modalEdification, statusModal}} >
            <BrowserRouter>
              <Header setExternalPage = {setExternalPage} setInternalPage = {setInternalPage} user = {user} />
                <Routes>
                  <Route path = '/' element = {<Navigate to = '/home' /> } />
                  <Route path='/home' element={!user ? <Home externalPage = {externalPage} /> : <Navigate to ='/city' />} /> 
                  <Route path='/city' element = {user ? <City internalPage = {internalPage} /> : <Navigate to = '/home' /> } />
                </Routes>
              <Footer />
            </BrowserRouter>
          </context.Provider> }
    </div>
    {isLoadingLoggerUser && <Loading />}
    </DndProvider>

    </>
  );
}

export default App;
