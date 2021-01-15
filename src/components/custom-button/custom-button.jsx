import React from 'react';
import './custom-button.scss';

const CustomButton= ({children, isGoogleSignin, inverted , ...otherprops}) =>
(
    <button className={`${inverted ? 'inverted': ''}
    ${isGoogleSignin ? 'google-sign-in': ''} custom-button`} {...otherprops}>
    {children}</button>
);

export default CustomButton;