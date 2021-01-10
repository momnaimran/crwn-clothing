import React from 'react';
import HomePage  from "./pages/homepage/homepage.componets.jsx";
import './App.css';
import {Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';

const Hats= () => (
  <h1>hey bitches we got hats</h1>
);

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/hats' component={Hats}/>
      </Switch>
    </div>
  );
}

export default App;
