import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx";
import UpperFilter from "./components/UpperFilter.jsx";
import FilterPanel from "./components/FilterPanel.jsx";
import ProductListing from "./components/ProductListing.jsx";
import Footer from "./components/Footer.jsx";
function App() {
 

  return (
    <>
      <Header/>
      <div className="container">
        <div className="left">
        <UpperFilter/>
      <FilterPanel/>
        </div>
        <div className="right"><ProductListing/></div>
      </div>
      <Footer/>
     
      
    </>
  )
}

export default App
