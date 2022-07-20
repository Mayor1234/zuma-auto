
import {initializeApp} from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc} from "firebase/firestore";



const firebaseConfig = {
   
        apiKey: process.env.REACT_APP_FIREBASE_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID,
        measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};


export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


// Sign In With Google
const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => {
        signInWithPopup( auth, provider)
        .then((userCredential)=>{
                
         const user = userCredential.user;   
         createUserDocumentFromAuth(user);

        })
        .catch((error)=>{
                console.log(error.message)
        })
};



// Data base storage with firestore

export const db = getFirestore(app);

export const createUserDocumentFromAuth = async (user) => {
        if(!user) return;

        const userDocRef = doc(db, 'users', user.uid);
        
        const userSnapShot = await getDoc(userDocRef);

        if(!userSnapShot.exists()){
                const {displayName, email} = user;
                const createdAt = new Date();

                try {
                
                        await setDoc(userDocRef, {displayName, email, createdAt});

                     
                } catch (error) {
         
                        console.log("Error adding document:", error.message)
                }
        }

        return userDocRef;
}


