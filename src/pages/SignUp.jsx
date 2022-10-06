import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

const SignUp = () => {
  const navigate = useNavigate();

  // states
  const [showPassword, setShowPassword] = useState(false);
  // formData object with all input fields as a state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  // event handlers
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        <form action="">
          <input
            type="text"
            className="nameInput"
            id="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />

          <input
            type="email"
            className="emailInput"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />

          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="password"
              id="password"
              value={password}
              onChange={handleChange}
            />
            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            />
          </div>
          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot Password
          </Link>

          <div className="signUpBar">
            <p className="signUpText">Sign up</p>
            <button className="signInButton">
              <ArrowRightIcon fill="#fff" width="34px" height="34px" />
            </button>
          </div>
        </form>

        {/* Google OAuth */}
        <Link to="/sign-in" className="registerLink">
          Sign In Instead
        </Link>
      </div>
    </>
  );
};

export default SignUp;
