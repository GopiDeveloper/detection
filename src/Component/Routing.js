import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Image from './image';


const Routing =() => {
    return(
        <BrowserRouter>
      <Header/>
         <Route exact path="/" component={Home}/>
         <Route path="/Image" component={Image}/>
      <Footer/>
  </BrowserRouter>
    )
}

export default Routing;