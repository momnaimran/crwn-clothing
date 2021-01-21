import React from 'react';
import './collection-overview.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'; 
import CollectionPreview from '../../components/collection-preview.component/collection-preview';
import { selectCollections } from "../../redux/shop/shop.selecttor";

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
    {
        collections.map(({id, ...othercollectionprops}) => (
            <CollectionPreview key={id} {...othercollectionprops}/>
        ) )
    }
    </div>
);
const mapStateToProps= createStructuredSelector(
    { collections: selectCollections}
 );

export default connect(mapStateToProps)(CollectionsOverview);