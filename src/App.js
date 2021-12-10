import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Registeration from './pages/Registeration';
import ActivatePage from './pages/ActivatePage';

import Bank from './pages/Bank';
import AddProducts from './pages/AddProducts';
import AllProducts from './pages/AllProducts';
import Report from './pages/Report';
import Orders from './pages/Orders';
import Reviews from './pages/Reviews';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/register" exact component={Registeration} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/activate/:token" exact component={ActivatePage} />
        <Route path="/bank" exact component={Bank} />
        <Route path="/addProducts" exact component={AddProducts} />
        <Route path="/allProducts" exact component={AllProducts} />
        <Route path="/report" exact component={Report} />
        <Route path="/orders" exact component={Orders} />
        <Route path="/reviews" exact component={Reviews} /> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
