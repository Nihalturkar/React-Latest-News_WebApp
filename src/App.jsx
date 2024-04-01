import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Newsboard from './Components/Newsboard'

const App = () => {

const [category, setCategory] = useState("general");
  return (
    <>
    <Navbar  setCategory={setCategory}/>
    <Newsboard category={category}/>
    </>
  )
}

export default App
