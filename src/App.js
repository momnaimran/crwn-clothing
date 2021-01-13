import React from 'react';
import HomePage  from "./pages/homepage/homepage.componets.jsx";
import Shop from "./pages/shop/shop.component.jsx";
import './App.css';
import {Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Header from "./components/header/header-component.jsx";
import Signin_Signup from './pages/signin-signup/signin-signup.jsx';
import {auth, createUserProfile} from './firebase/firebase.util';
import {connect} from "react-redux";
import {setCurrentUser} from './redux/user/users.actions';

class App extends React.Component {

 unsunscribeFromAuth=null;


componentDidMount()
{
  const { setCurrentUser } = this.props;

this.unsunscribeFromAuth= auth.onAuthStateChanged(async userAuth =>{
     if(userAuth)
     {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
                  id: snapShot.id,
                  ...snapShot.data()
                
            }
          );
        }
        );
     }
     else{
       setCurrentUser( userAuth);
     }}
     );    
}


componentWillUnmount(){
  this.unsunscribeFromAuth();
}
  render(){
  return (
    <div>
    <Header />
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={Shop} />
      <Route exact path='/signin' component={Signin_Signup} />
      </Switch>
    </div>
  );
}

}


const mapDispatchToProps= dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(null,mapDispatchToProps)(App);
