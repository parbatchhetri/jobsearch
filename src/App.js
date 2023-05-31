import React from 'react'
import "./App.css"
import Navbar from "./components/navbar/Navbar"
import Searchbar from "./components/searchbar/Searchbar"
import Jobdiv from "./components/jobdiv/Jobdiv"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <div className='app'>
    <Navbar/>
    <Searchbar/>
    <Jobdiv/>
    <Footer/>
      

    </div>
  )
}

export default App
