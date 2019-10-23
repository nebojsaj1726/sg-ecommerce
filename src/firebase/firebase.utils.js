import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB1n8A0_w2l_4g4nnBye3CfROkj4tQQ5dA",
    authDomain: "ecommerce-app-3fb35.firebaseapp.com",
    databaseURL: "https://ecommerce-app-3fb35.firebaseio.com",
    projectId: "ecommerce-app-3fb35",
    storageBucket: "",
    messagingSenderId: "511640901084",
    appId: "1:511640901084:web:cdb053f248cee50c29ab19",
    measurementId: "G-2CHZ1JYQ1G"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
           }) 
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    });
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider); 

export default firebase;