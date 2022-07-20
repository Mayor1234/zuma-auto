import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile, onAuthStateChanged, signOut, sendPasswordResetEmail } from "firebase/auth";
import {auth, createUserDocumentFromAuth} from "../FirebaseComponent/firebase";
import { onSnapshot } from "firebase/firestore";




const UserContext = createContext({});


// Creating a custom hook that can be directly used in any child's component
export const useUserContext = () => useContext(UserContext)

const UserContextProvider = ({children})=>{

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState("");





// Creating useEffect to handle sideeffect of RegisterUser, signInUser and logOutUser and forgotPassword
useEffect(() => {
    setLoading(true);
    const unsubscribeFromAuth =  onAuthStateChanged(auth, async (user) => {
        
       if(user){
            const userDocRef = await createUserDocumentFromAuth(user)
            onSnapshot(userDocRef, snapShot=>{
               setUser({
                   id: snapShot.id, 
                   ...snapShot.data()
                }) 
            });  
        }else{
            setUser(null);
        }

      setError("");
      setLoading(false);

      return () => {
        unsubscribeFromAuth();
      };
    });
  }, []);

   
// Register with email and password method
const registerUser =(name, email, password)=>{
    
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then(()=>{
       return updateProfile(auth.currentUser, {
            displayName: name,
        });
    }).then(user => console.log(user))
    .catch(error=>setError(error.message))
    .finally(()=>setLoading(false));

};

// Sign in with email and password method
const signInUser = (email, password)=>{
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then(user => console.log(user))
    .catch(error=>setError((error.message)))
    .finally(()=>setLoading(false))
};

// Logout User method
const logOutUser = ()=>{
    signOut(auth);
};

// Forgot password method
 const forgotPassword = (email)=>{
    return sendPasswordResetEmail(auth, email)
 };


const contextValue = {user, loading, error, registerUser, signInUser, logOutUser, forgotPassword} 
   
    return(
        <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    );
};


export default UserContextProvider;