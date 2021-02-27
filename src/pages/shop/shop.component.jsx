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
   collectionRef.get().then(snapShot=> {               //yahan pehlay collectionRef.onSnapShot(async snapShot => baqi cooodddeeeee) that humnay ye esay promise pattern kay leay kerkay dekha hay wo seekhnay kay leay wesay he issay ye nuqsaan hay kay live updates kay sath cooperate nai keray ga ye jesay on snapchot kerta tha component jub remount hoga update tb he hoge bs
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