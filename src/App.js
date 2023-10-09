import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react'
import Home from './Home'
import Sectiontwo from './Sectiontwo'



function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sectiontwo" element={<Sectiontwo />}></Route>
    </Routes>
  </Router>
  )
}

export default App