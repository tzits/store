import { initializeApp } from 'firebase/app'
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider ,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyDWOR3W8lT-vYwz8xrI7S_JMHeULzn53v0",
    authDomain: "pngs-r-us.firebaseapp.com",
    projectId: "pngs-r-us",
    storageBucket: "pngs-r-us.appspot.com",
    messagingSenderId: "275853360497",
    appId: "1:275853360497:web:d809cd29e1ec7fd1268ad0"
  
};
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth, additionalInformation) => {
    if (!userAuth) return
    const userDocRef = doc(db, 'users', userAuth.uid)


    const userSnapshot = await getDoc(userDocRef)


    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('error creating user', error.message )
        }
    }

    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async(email,password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async(email,password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}