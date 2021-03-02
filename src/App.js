import React from 'react';
import HomePage  from "./pages/homepage/homepage.componets.jsx";
import Shop from "./pages/shop/shop.component.jsx";
import {GlobalStyle} from './global.styles';
import {Route, Redirect} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Header from "./components/header/header-component.jsx";
import SIGNIN_SIGNUP from './pages/signin-signup/signin-signup';
import {auth, createUserProfile/*, addCollectionAndDocuments*/} from './firebase/firebase.util';
import {connect} from "react-redux";
import {setCurrentUser} from './redux/user/users.actions';
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import CheckoutPage from './pages/checkout/checkout.component';
//import {selectCollectionsPreview} from './redux/shop/shop.selecttor';

class App extends React.Component {

 unsubscribeFromAuth=null;


componentDidMount()
{
  const { setCurrentUser/*, collectionsArray */} = this.props;
this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth =>{
     if(userAuth)
     {
       console.log('authenticated');
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
                  id: snapShot.id,
                  ...snapShot.data()
            });
        });
     }
     
       setCurrentUser(userAuth);
    // addCollectionAndDocuments('Collections', collectionsArray.map(({title, items})=> ({title, items})));
    });    
}


componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
  return (
    <div>
    <GlobalStyle/>
    <Header />
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route  path='/shop' component={Shop} />
      <Route exact path='/signin' render={() =>
       this.props.currentUser ? (<Redirect to='/'/>) 
       : (<SIGNIN_SIGNUP/>)} />
       <Route exact path='/checkout' component={CheckoutPage}/>
      </Switch>
    </div>
  );
}

}

const mapStateToProps =createStructuredSelector({
  currentUser: selectCurrentUser,
//  collectionsArray: selectCollectionsPreview
});

const mapDispatchToProps= dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

