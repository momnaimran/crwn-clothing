import React from 'react';
import './directory.styles.scss';
import MenuItems from "../menu-items/menu-items";
import {selectDirectorySelector} from '../../redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect';
import { connect } from "react-redux";
const Directory= ({sections})=> (
            <div className='directory-menu'>
            {
                sections.map(({id, ...othercomponents}) => (
                    <MenuItems key={id} {...othercomponents} />
                ))
            }
          
            </div>
      
);

const mapStateToProps= createStructuredSelector(
  {
sections: selectDirectorySelector
  }
);

export default connect(mapStateToProps)(Directory);