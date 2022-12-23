import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Restuarantlist from './components/Restuarantlist'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Viewrestaurant from './components/Viewrestaurant'
// import Viewrest from './components/Viewrest'
function App() {
  return (
    <div>
      <Router>
        <header className="App-header">
        <Header />
        <Routes>
          <Route path='/' element={<Restuarantlist />} />
          <Route path='/Viewrestaurant/:id' element={<Viewrestaurant />} />
          {/* <Route path='/viewrest/:id' element={<Viewrest />} /> */}

        </Routes>
        <Footer />
        </header>
      </Router>
    </div>
  )
}

export default App