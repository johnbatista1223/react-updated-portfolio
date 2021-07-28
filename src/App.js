import React from 'react';
import Project from './components/Project';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from './components/pages/Contact';

 





function App() {
  return (
    <div>
     
      <Router>
        <Header />
      
        <Route path="/contact" exact component={Contact} />
        <Route path="/" exact component={Project} />
    
      </Router>
     

    </div>

  )
}

export default App;