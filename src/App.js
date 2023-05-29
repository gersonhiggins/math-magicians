import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './modules/calculator';
import Home from './modules/home';
import Quote from './modules/quote';
import Navbar from './modules/navbar';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
