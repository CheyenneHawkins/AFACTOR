import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Work from './Work';
import About from './About';
import { Route, Routes } from "react-router-dom";
import Construction from './Construction';

// import logo from "./images/AF_LOGO.png";




function App() {
  
  return (
    <>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/construction" element={<Construction />} />
            {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
