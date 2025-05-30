import Footer from "./Components/Footer";
import NavbarComponent from "./Components/NavbarComponent";
import Home from "./Pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Components/Login";


const App = () => {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
