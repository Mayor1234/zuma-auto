import React, { useState } from "react";
import SignInPage from "../SigninPageComponent/SignInPage";
import SignUpPage from "../SignupPageComponent/SignUpPage";
import "./SigninSignup.style.scss";

const SigninSignupPage = () => {
  const [login, setLogin] = useState(false);

   const togglePage = ()=>{
     setLogin((prevState) => !prevState)
   }

  return (
    <div className="signin-signup">
       {!login? <SignInPage />:<SignUpPage />} 
       <p onClick={togglePage}>
         {!login? "New user? Click here":"Already have an account"}
       </p>
    </div>
  );
};

export default SigninSignupPage;
