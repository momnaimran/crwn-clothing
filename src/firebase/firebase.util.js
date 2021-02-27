import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
 const config={
        apiKey: "AIzaSyArWxLdlG-caHWCkFDPH5ZJ0ABmzWqUNFU",
        authDomain: "crwn-db-29151.firebaseapp.com",
        projectId: "crwn-db-29151",
        storageBucket: "crwn-db-29151.appspot.com",
        messagingSenderId: "180494318350",
        appId: "1:180494318350:web:92cf62406d25f0c8c9355f",
        measurementId: "G-ZYMB6837Z5"
      };
 
//firebase.initializeApp(config);
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export const auth= firebase.auth();
export const firestore= firebase.firestore();
//stuff for google sign in
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle= () => auth.signInWithPopup(provider);
//google sign in end
export const createUserProfile =async (userAuth, additionalData)=>
{
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot= await userRef.get();
  if(!snapShot.exists)
  {
    const {displayName, email}= userAuth;
    const createdAt= new Date();
    try
    {
      await userRef.set({displayName,email,createdAt,...additionalData})
    }
    catch(error){
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};
//writing this so i don't have to put shop data into firestore manually 
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch=firestore.batch();
  objectsToAdd.forEach(    //forEach method just applies our function/ process on every element in the array it does not give us a bew array in return unlike maps
   obj => {
    const newDocRef = collectionRef.doc(); //get me a new document space that is emmpty also assign it a unique id 
     batch.set(newDocRef, obj);
  }
  );
  return await batch.commit(); //to fire off our batch request batch.commit returns us a promise which can be useful incase we wanna do something after the call is successful in case of siccess it returns a null value in the promise 
};

export const convertCollectionSnapshotToMap = (collections)=> {

  const transformedCollection = collections.docs.map(
     doc => {
      const {title, items}= doc.data();

       return {
         routeName: encodeURI(title.toLowerCase()),
         id: doc.id,
         title,
         items
       };
     });
     return transformedCollection.reduce( (accumlator, collection)=> {
       accumlator[collection.title.toLowerCase()]= collection;
       return accumlator;
     },{});
}