import React from 'react';
import {
  BrowserRouter as Router, Routes,
  Route,
} from 'react-router-dom';
import ConverterCurrency from './pages/ConverterCurrency/ConverterCurrency';
import Currency from './pages/Currency/Currency';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConverterCurrency />} />
        <Route path="/currency" element={<Currency />} />
      </Routes>
    </Router>
  );
}

export default App;
