import { initializeApp } from 'firebase/app'
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider 
} from 'firebase/auth'

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