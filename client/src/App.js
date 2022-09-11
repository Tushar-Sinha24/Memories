import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'
import Navbar from './components/Navbar'
import Login from "./components/Login";


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
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>
        </main>
      </Router>
    </>
  );
}

export default App;
