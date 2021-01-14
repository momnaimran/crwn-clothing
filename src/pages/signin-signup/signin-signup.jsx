import React from 'react';
import './signin-signup.styles.scss';
import Signin from "../../components/sign-in/signin.component";
import SignUp from '../../components/signup/signup';
const SIGNIN_SIGNUP = () =>
(
   <div className="sign-in-and-sign-up">
   <Signin/>
   <SignUp/>
   </div>
);
export default SIGNIN_SIGNUP;