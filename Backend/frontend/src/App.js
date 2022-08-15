import './App.css';
import Home from './Home';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery";
import "bootstrap/dist/js/bootstrap";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Page from "./Page"
import Page1 from "./Page1"
function App() {
  return (
<>


<Router>
  <Routes>
    <Route path = "/" element = {<Home/>}/>
    <Route path='/grid' element= {<Page/>}/>
    <Route path='/Page1' element= {<Page1/>}/>
  </Routes>
</Router>






</>
          
  );
}

export default App;
