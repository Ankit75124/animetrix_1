import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Animes from './components/Animes/Animes';
import Login from './components/Auth/Login';
import Home from './components/Home/Home';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';

function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/animes" element={<Animes />} />
      <Route path="/login" element={<Login />} />
    </Routes>

    <Footer/>

    </Router>
  );
}

export default App;
