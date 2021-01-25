import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';
import { connect } from "react-redux";
import {selectCollection} from '../../redux/shop/shop.selecttor';
const CollectionPage =({collection}) =>
{
    const {title, items}= collection;
return(
    <div className='collection-page'>
    <h2 className='title'>{title}</h2>
    <div className='items'>
    {
        items.map(
            item => (
                <CollectionItem  key={item.id} item={item}/>
            ) 
        )
    }
    </div>
    </div>
);}
//ownProps are the second parameter that can be taken in mapstatetoprops its the props that the component inherits 
//which is the exact thing that we need sincewe need to access params from match
const mapStateToProps= (state, ownProps) => ({
collection: selectCollection(ownProps.match.params.collectionid)(state)
});

export default connect(mapStateToProps)(CollectionPage);