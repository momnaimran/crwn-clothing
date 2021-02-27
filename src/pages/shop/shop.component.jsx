import React from 'react';
import CollectionsOverview from '../../components/collection-overview/collections-overview.components';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { connect } from "react-redux";
import {updateCollections} from '../../redux/shop/shop.actions';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.util';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component{
  state={
    loading: true
  };
    unsubscribeFromSnapshot= null;

   
   componentDidMount(){
       const {updateCollections}= this.props;
   const collectionRef=firestore.collection('Collections');
   collectionRef.onSnapshot(async snapShot=> {
       const collectionMap= convertCollectionSnapshotToMap(snapShot);
       updateCollections(collectionMap);
       this.setState({loading: false});
   });

     }

    render(){
        const {loading}=this.state;
        const {match}= this.props;
     return(
            <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props)=> <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
        <Route path={`${match.path}/:collectionid`}  render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
            </div>
        );
    }

}
const mapDispatchToProps= dispatch => ({
updateCollections: collectionMap=> dispatch(updateCollections(collectionMap))
})
export default connect(null, mapDispatchToProps)(Shop);