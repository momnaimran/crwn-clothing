import React from 'react';
import CollectionsOverview from '../../components/collection-overview/collections-overview.components';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching, selectIsCollectionsLoading} from '../../redux/shop/shop.selecttor';
import {fetchCollectionStartAsync} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component{

   
   componentDidMount(){
       const {fetchCollectionStartAsync}= this.props;
       fetchCollectionStartAsync();
     }

    render(){
        const {match, isCollectionFetching, isCollectionLoaded}= this.props;
     return(
            <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props)=> <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>}/>
        <Route path={`${match.path}/:collectionid`}  render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>}/>
            </div>
        );
    }

}

const mapStateToProps= createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionsLoading
})
const mapDispatchToProps= dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})
export default connect(mapStateToProps, mapDispatchToProps)(Shop);