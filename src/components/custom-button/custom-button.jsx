import React from 'react';
import './custom-button.scss';

const CustomButton= ({children, isGoogleSignin, ...otherprops}) =>
(
    <button className={`${isGoogleSignin ? 'google-sign-in': ''} custom-button`} {...otherprops}>
    {children}</button>
);

export default CustomButton;