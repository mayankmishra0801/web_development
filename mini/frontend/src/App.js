import Home from './Home';
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery";
import "bootstrap/dist/js/bootstrap";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
         <Route path = "/Login" element = {<Login/>}/>
      </Routes>
    </Router>
    
    
    
    
    </>
  );
}

export default App;
