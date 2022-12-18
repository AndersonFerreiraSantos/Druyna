import {BrowserRouter, Routes, Route} from 'react-router-dom'
import '../css/app.css'

import Header from '../../pages/home/page/Header'
import Home from '../../pages/home/page/Home'
import Footer from '../../pages/home/page/Footer'

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
