import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/page/Home'

function App() {
  return (
    <div className="App">
      <h1>Teste</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} /> 
      </Routes>
      </BrowserRouter>
      <h1>Teste</h1>
    </div>
  );
}

export default App;
