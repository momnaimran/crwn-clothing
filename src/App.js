import React from 'react';
import HomePage  from "./pages/homepage/homepage.componets.jsx";
import Shop from "./pages/shop/shop.component.jsx";
import './App.css';
import {Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Header from "./components/header/header-component.jsx";
import Signin_Signup from './pages/signin-signup/signin-signup.jsx';
import {auth, createUserProfile} from './firebase/firebase.util';


class App extends React.Component {
 constructor()
 {
   super();
   this.state={
     currentUser:null
   }
 }
 unsunscribeFromAuth=null;


componentDidMount()
{
this.unsunscribeFromAuth= auth.onAuthStateChanged(async userAuth =>{
     if(userAuth)
     {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState(
            {
                currentUser:{
                  id: snapShot.id,
                  ...snapShot.data()
                }
            }
          );
        }
        );
     }
     else{
       this.setState({currentUser: userAuth});
     }}
     );    
}


componentWillUnmount(){
  this.unsunscribeFromAuth();
}
  render(){
  return (
    <div>
    <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={Shop} />
      <Route exact path='/signin' component={Signin_Signup} />
      </Switch>
    </div>
  );
}

}

export default App;
