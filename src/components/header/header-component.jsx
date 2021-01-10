import React from 'react';
import "./header-compoent.styles.scss";
import {ReactComponent as Logo} from '../../assests/crown.svg';
import {Link} from 'react-router-dom';
const Header= () =>
(
<div className="header">
<Link to="/" className="logo-container">
<Logo className="logo" />
</Link>

<div className="options">
<Link className="option" to="/shop">
SHOP
</Link>
<Link className="option" to="/contact">
CONTACT
</Link>

</div>

</div>
);
export default Header;