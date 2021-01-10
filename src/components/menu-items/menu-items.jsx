import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

const MenuItems= ({ title, imageUrl , size, history, match, linkUrl }) => (
    <div style={{backgroundImage:`url(${imageUrl})`}} 
    className={`${size} menu-item`} 
    onClick={()=>history.push(`${match.url}${linkUrl}`)}>
    <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}}/>   {/* iska seperate div isi leay bnaya hay kay jo image aay large bhe hote hay small bhe hote hay uspay hover effect main hum chahtay hain kay image perzoom ho yani main dic kay ander rehtay rehtay sirf aur sirf backgroung image a size increse ho so ns he humnay container ko wrap kia is image dicv kay sath qun kay werna container ka size bhe hiver kernay per bher jata aur outside div main isliay nai rkha kay werna image itself boundries say bahir jati jubkay we wanted it to enlarge within the boundaries*/}
    <div className='content'>
        <h1 className='title'>
            {title.toUpperCase()}
        </h1>
        <span className='sub-title'>
            SHOP NOW
        </span>
    </div>
</div>

);

export default withRouter(MenuItems);