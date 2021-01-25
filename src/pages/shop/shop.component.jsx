import React from 'react';
import CollectionsOverview from '../../components/collection-overview/collections-overview.components';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
const Shop= ({match})=> (
         <div className='shop-page'>
     <Route exact path={`${match.path}`} component={CollectionsOverview}/>
     <Route path={`${match.path}/:collectionid`} component={CollectionPage}/>
         </div>
     );



export default Shop;