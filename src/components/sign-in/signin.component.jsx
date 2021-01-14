import React from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {auth, signInWithGoogle} from '../../firebase/firebase.util';

class Signin extends React.Component{
constructor(props)
{
   super(props);

   this.state={
        email:'',
        password:''
   };
}

handleSubmit= async () => {
const {email, password}= this.state;
console.log("i am in sign in submit component");
try{
await auth.signInWithEmailAndPassword(email, password);
this.setState({email:'', password:''});
}
catch(error)
{
    console.log(error);
}
};


handleChange = event => {
         const {value, name}= event.target;
   
         this.setState({[name]:value});  //state main email aur password ke value ayk he function likhnay say set ho gae hay
};

render()
{
    return(
             <div className="sign-in">
             <h1>I already have an account</h1>
             <span>Sign in with your email and password</span>

             <form>
             <FormInput name="email" type="email" label="email" value={this.state.email} handleChange={this.handleChange} required/>
             <FormInput name="password" type="password" label="password" value={this.state.password} handleChange={this.handleChange} required/>
            
    
             <div className="buttons">
             <CustomButton type='button' onClick={this.handleSubmit} >SIGN IN</CustomButton>
             <CustomButton type="button" onClick= {signInWithGoogle} isGoogleSignin> {' '} Signin With Google {' '}</CustomButton>
             </div>
             </form>

             </div>
    );
}

} 
export default Signin;