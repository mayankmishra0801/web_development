import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery";
import "bootstrap/dist/js/bootstrap";

import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Academics from "./Academics";
import Admission from "./Admission";
import Contact from "./Contact";
import Facilities from "./Facilities";
import Notice_announcement from "./Notice_announcement";
import Photo_gallery from "./Photo_gallery";
import Registration from "./Registration";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";




function App() {
  return (
    <>
   <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path = "/About" element={<About/>} />
      <Route path = "/Academics" element={<Academics/>} />
      <Route path = "/Admission" element={<Admission/>} />
      <Route path = "/Contact" element={<Contact/>} />
      <Route path = "/Registration" element = {<Registration/>} />
      <Route path = "/Facilities" element={<Facilities/>} />
      <Route path = "/Notice_announcement" element={<Notice_announcement/>} />
      <Route path = "/Photo_gallery" element={<Photo_gallery/>} />
    </Routes>
   </Router>

   </>

  );
}

export default App;
