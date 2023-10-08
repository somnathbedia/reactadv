import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


const Home = () => {
  return <h1>This is the home page.</h1>;
};

const About = () => {
  return <h1>This is the about page.</h1>;
};

const Contact = () => {
  return <h1>This is the contact page.</h1>;
};

const Header = () => {
  return <h1>This is Header</h1>
}

function App() {
  return (
    <Router>
      <Header />
      <ul>
      <li><Link to="/">Root</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}



export default App;
