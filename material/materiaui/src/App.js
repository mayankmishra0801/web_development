import logo from './logo.svg';
import './App.css';
import PageHome from './Home';
import About from './About';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Pagedrawer from './Pagedrawer';
import Page from './Page';
import Abc from './Abc';




function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<PageHome/>}/>
         <Route path = '/About' element = {<About/>}/>
         <Route path = '/Pagedrawer' element={<Pagedrawer/>}/>
         <Route path = '/Page' element = {<Page/>}/>
         <Route path = '/Abc' element = {<Abc/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
