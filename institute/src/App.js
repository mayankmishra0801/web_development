import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';
function App() {
  return (
   <Router>
     <Routes>
       <Route path = '/' element = {<Home/>}/>
       <Route path ='/About' element = {<About/>}/>
       <Route path = '/Contact' element = {<Contact/>}/>
       
     </Routes>
   </Router>
  );
}

export default App;
