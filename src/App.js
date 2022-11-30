import react from 'react';
import Calculator from './components/calculator';
import './App.css';
import Home from './components/home';
import Header from './components/header';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/Quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
