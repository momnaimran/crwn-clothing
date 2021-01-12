import React from 'react';
import './signup.styles.scss';
import {auth, createUserProfile} from '../../firebase/firebase.util';
import FormInput from "../../components/form-input/form-input";
import CustomButton from '../../components/custom-button/custom-button';

class SignUp extends React.Component{
constructor()
{
    super();

    this.state={
        displayName: '',
        email:'',
        password: '',
        confirmpassword:''
    }
}
handleSubmit= async event =>{
    event.preventDefault();
    const {displayName, email, password, confirmpassword} = this.state;

    if(password !== confirmpassword)
    {
        alert("The passwords don't match please reenter");
      return;
    }
    
    try
    {
        const {user}= await auth.createUserWithEmailAndPassword(email, password);
        await createUserProfile(user, {displayName});

        this.setState(
            {
                displayName: '',
                email:'',
                password: '',
                confirmpassword:''
            }
        );
    }
    catch(error)
    {
        console.error(error);
    }
}

handleChange= event => {
    const {name, value}=event.target;
    this.setState({[name]: value});
}
render()
{
    const {displayName, email, password, confirmpassword} = this.state;
    return(
        <div className="sign-up">
         <h2 className='title'>I do not have an account</h2>
         <span>Sign up with your email and password</span>
         <form className='sign-up-form' onSubmit={this.handleSubmit}>
         <FormInput
         type='text'
         name='displayName'
         value={displayName}
         label='Display Name'
         onChange={this.handleChange}
         required 
         />
         <FormInput
         type='email'
         name='email'
         value={email}
         label='Email'
         onChange={this.handleChange}
         required 
         />
         <FormInput
         type='password'
         name='password'
         value={password}
         label='Password'
         onChange={this.handleChange}
         required 
         />
         <FormInput
         type='password'
         name='confirmpassword'
         value={confirmpassword}
         label='Confirm Password'
         onChange={this.handleChange}
         required 
         />
         <CustomButton type='submit'>SIGN UP</CustomButton>
         </form>
        </div>
    );
}

}
export default SignUp;