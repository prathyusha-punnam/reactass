import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./Components/Home"
import Student from "./Components/Student"
import Contact from "./Components/Contact"
import Navbar from "./Components/Navbar"

const App =() => {
    return(
        <div className="background">
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/student" element={<Student />} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
            {/* <Student /> */}
        </Router>
        </div>
    )

}
export default App