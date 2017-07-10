import firebase from 'firebase';
import env from '~/config/env';

firebase.initializeApp(env.FIREBASE);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth();
export const facebookProvider = firebase.auth.FacebookAuthProvider;
export const firebaseStorage = firebase.storage().ref();
