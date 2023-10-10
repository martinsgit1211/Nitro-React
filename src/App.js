import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react'
import Home from './Home'
import Sectiontwo from './Sectiontwo'
import Sectionthree from './Sectionthree'
import Foot from './Footer'


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sectiontwo" element={<Sectiontwo />}></Route>
      <Route path="/sectionthree" element={<Sectionthree />}></Route>
      <Route path="/foter " element={<Foot />}></Route>
    </Routes>
  </Router>
  )
}

export default App