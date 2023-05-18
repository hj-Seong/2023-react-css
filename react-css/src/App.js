import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './page/Home';
import About from './page/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
