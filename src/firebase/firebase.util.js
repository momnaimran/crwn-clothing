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
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle= () => auth.signInWithPopup(provider);

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


//export default firebase;