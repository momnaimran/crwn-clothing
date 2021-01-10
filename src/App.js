import React from 'react';
import HomePage  from "./pages/homepage/homepage.componets.jsx";
import Shop from "./pages/shop/shop.component.jsx";
import './App.css';
import {Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';



function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
