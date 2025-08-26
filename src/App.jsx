import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import UpperFilter from "./components/UpperFilter";
import FilterPanel from "./components/FilterPanel";
import ProductListing from "./components/ProductListing"
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
     
      
    </>
  )
}

export default App
