import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import UpperFilter from "./components/UpperFilter";
import FilterPanel from "./components/FilterPanel";
function App() {
 

  return (
    <>
      <Header/>
      <UpperFilter/>
      <FilterPanel/>
    </>
  )
}

export default App
