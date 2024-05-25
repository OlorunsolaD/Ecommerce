import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import HomeScreen from './components/screens/HomeScreen'
import SignupScreen from './components/screens/SignupScreen'
import LoginScreen from './components/screens/LoginScreen'
import CartScreen from './components/screens/CartScreen'
import ProductScreen from './components/screens/ProductScreen'



export default function App() {
  return (
    <>
    
    <Router>

      <Header />
      <Routes>
        <Route exact path="/" element={<HomeScreen/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/product/:id" element={<ProductScreen/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/Login" element={<LoginScreen/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/Signup" element={<SignupScreen/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/Cart" element={<CartScreen/>}></Route>
      </Routes>


    </Router>
    
     </>
  )
}
