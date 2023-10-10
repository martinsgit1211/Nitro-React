import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from './Home'
import Sectiontwo from './Sectiontwo'
<<<<<<< HEAD
import Sectionthree from './Sectionthree'
=======
<<<<<<< HEAD
import Banner from './Banner'
=======
>>>>>>> 2313df37ee36f592ae96f9ca6c6cf541a96d754a
import Foot from './Footer'
>>>>>>> refs/remotes/origin/master


function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sectiontwo" element={<Sectiontwo />}></Route>
        <Route path="/banner" element={<Banner />}></Route>
      </Routes>
    </Router>
=======
  <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sectiontwo" element={<Sectiontwo />}></Route>
      <Route path="/sectionthree" element={<Sectionthree />}></Route>
      <Route path="/foter " element={<Foot />}></Route>
    </Routes>
  </Router>
>>>>>>> refs/remotes/origin/master
  )
}

export default App