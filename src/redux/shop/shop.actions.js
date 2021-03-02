import ShopActionTypes from './shop.types';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.util';

export const fetchCollectionStart = () =>( {
    type: ShopActionTypes.FETCH_COLLECTION_START
});

export const fetchCollectionsSuccess = collectionsmap => ({
    type:ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionsmap
});
export const fetchCollectionFailure = errorMessage => 
({
    type:ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
});
export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef=firestore.collection('Collections');
        dispatch(fetchCollectionStart());
        collectionRef.get().then(snapShot=> {               //yahan pehlay collectionRef.onSnapShot(async snapShot => baqi cooodddeeeee) that humnay ye esay promise pattern kay leay kerkay dekha hay wo seekhnay kay leay wesay he issay ye nuqsaan hay kay live updates kay sath cooperate nai keray ga ye jesay on snapchot kerta tha component jub remount hoga update tb he hoge bs
            const collectionMap= convertCollectionSnapshotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionMap));
             }).catch(error => dispatch(fetchCollectionFailure(error.message)));
    }
}