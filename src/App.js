// import logo from './logo.svg'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Homeproperties from './Pages/Homeproperties';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/property/:id' element={<Homeproperties />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
