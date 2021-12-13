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
import Loading from "./pages/Loading";
import PrivateRoute from "./auth/PrivateRoute";
import UpdateProduct from './pages/Update-Product';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/register" exact component={Registeration} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/activate/:token" exact component={ActivatePage} />
        <PrivateRoute path="/finance" exact component={Bank} />
        <PrivateRoute path="/add-products" exact component={AddProducts} />
        <PrivateRoute path="/loading" exact component={Loading} />
        <PrivateRoute path="/all-products" exact component={AllProducts} />
        <PrivateRoute path="/update-product/:productId" exact component={UpdateProduct} />
        <PrivateRoute path="/report" exact component={Report} />
        <PrivateRoute path="/orders" exact component={Orders} />
        <PrivateRoute path="/reviews" exact component={Reviews} /> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
