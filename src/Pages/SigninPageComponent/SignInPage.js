import React, { useState } from "react";
import "./SignInPage.style.scss";
import { signInWithGoogle } from "../../Components/FirebaseComponent/firebase";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import { useUserContext } from "../../Components/ContextComponent/UserContext";
import FormInput from "./FormInput";
import { FaEyeSlash } from "react-icons/fa";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const { signInUser, forgotPassword } = useUserContext();

  // Submit form
  const handleEmailAndPassword = (e) => {
    e.preventDefault();
    if (email && password) signInUser(email, password);

    setEmail("");
    setPassword("");
  };

  const forgotPasswordHandler = (e) => {
    if (email) forgotPassword(email).then(() => setEmail(""));
  };

  return (
    <div className="sign-in">
      <div className="form-header">
        <h3>I already have an account</h3>
        <span> Please sign in with your email and password</span>
      </div>
      <form
        onSubmit={(e) => {
          handleEmailAndPassword(e);
        }}
      >
        <div className="group">
          <FormInput
            className="form-input"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            required
          />
        </div>

        <div className="group">
          <FormInput
            className="form-input"
            type={show ? "text" : "password"}
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            required
          />
          <span>
            <FaEyeSlash onClick={() => setShow(!show)} className="passicon" />
          </span>
        </div>

        <ButtonComponent type="submit" solid="btn custom-btn" text="Sign In" />

        <div className="google-btn" onClick={signInWithGoogle}>
          <button className="google-logo">
            <img
              src={process.env.PUBLIC_URL + `/images/Google_logo.webp`}
              alt="google_sign_in"
            />
          </button>
          <p>Sign in with Google</p>
        </div>

        <p onClick={forgotPasswordHandler}>Forgot password?</p>
      </form>
    </div>
  );
};

export default SignInPage;
