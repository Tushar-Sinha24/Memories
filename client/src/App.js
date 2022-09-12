import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'
import Navbar from './components/Navbar'
import Login from "./components/Login";
import Signup from './components/Signup'
import Home from "./components/Home";


function App() {
  return (
    <>
      <Router>

        <div className="container">
        <header>
          <Navbar />
        </header>
        </div>

        <main>
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </div>
        </main>
      </Router>
    </>
  );
}

export default App;
