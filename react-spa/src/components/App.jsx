import React from 'react';
import {
  BrowserRouter as Router, Routes,
  Route,
} from 'react-router-dom';
import Currency from './pages/Currency/Currency';

function App() {
  return (
<Router>
 
<Routes>
    <Route path="/currency" element={<Currency/>} />
    </Routes>
   
  </Router>
  );
}

export default App;
