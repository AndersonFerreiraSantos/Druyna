import {BrowserRouter, Routes, Route} from 'react-router-dom'
import '../css/app.css'

import Home from '../../pages/home/page/Home'
import Footer from '../../pages/home/page/Footer'
import Header from '../../pages/home/page/Header'

function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} /> 
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
