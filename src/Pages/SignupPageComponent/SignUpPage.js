import React, { useState } from "react";
import "./SignUpPage.style.scss";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import { useUserContext } from "../../Components/ContextComponent/UserContext";
import FormInput from "../SigninPageComponent/FormInput";
import { FaEyeSlash } from "react-icons/fa";
import { ClipLoader } from "react-spinners";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  // let navigate = useNavigate();

  const { registerUser, loading } = useUserContext();

  // // useEffect(() => {
  //   if (user) navigate("/");
  // }, [user]);

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && password) registerUser(name, email, password);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-up">
      <div className="form-header">
        <h3>New user</h3>
        <span>Pls create a new account</span>
      </div>
      { loading ?  (<div className="loader-spinner">
        <ClipLoader color={'#203040'} size={100} /></div>):
      (<form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="group">
          <FormInput
            className="form-input"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
            required
          />
        </div>

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

        <ButtonComponent type="submit" solid="btn custom-btn" text="Sign Up" />
      </form>)}
    </div>
  );
};

export default SignUpPage;
