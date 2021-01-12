import React from 'react';
import './signin-signup.styles.scss';
import Signin from "../../components/sign-in/signin.component";
import SignUp from '../../components/signup/signup';
const Signin_Signup = () =>
(
   <div className="sign-in-and-sign-up">
   <Signin/>
   <SignUp/>
   </div>
);
export default Signin_Signup;