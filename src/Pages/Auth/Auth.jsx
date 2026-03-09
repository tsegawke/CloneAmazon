import React, { useContext, useState } from "react";
import logo from "../../assets/images/newLogo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import classes from "./SignIn.module.css";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import Loader from "../../Components/Loader/Loader";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [{ user }, dispatch] = useContext(DataContext);
  const [loading, setLoading] = useState({ signIn: false, signUp: false });
  const navigate = useNavigate();
  const NavStateData = useLocation();

  const authHandler = async (e) => {
    e.preventDefault();
    setError("");

    if (!isSignUp) {
      // 🔹 Sign In
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate(NavStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setLoading({ ...loading, signIn: false });
          setError(err.message);
        });
    } else {
      // 🔹 Sign Up
      if (!name.trim()) {
        setError("Please enter your name");
        return;
      }
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          updateProfile(userInfo.user, { displayName: name });
          dispatch({
            type: Type.SET_USER,
            user: { ...userInfo.user, displayName: name },
          });
          setLoading({ ...loading, signUp: false });
          navigate(NavStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setLoading({ ...loading, signUp: false });
          setError(err.message);
        });
    }
  };

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      {/* form */}
      <div className={classes.login__container}>
        <h3>{isSignUp ? "Create Account" : "Sign in"}</h3>
        {NavStateData?.state?.msg && (
          <small className={classes.redirectMsg}>
            {NavStateData.state.msg}
          </small>
        )}

        <form onSubmit={authHandler}>
          {isSignUp && (
            <div>
              <label htmlFor="name">Your Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                placeholder="First Name"
              />
            </div>
          )}
          <div>
            <label htmlFor="email">Email</label>
            <input
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              autoComplete={isSignUp ? "new-password" : "current-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>

          <button type="submit" className={classes.login__signInButton}>
            {loading[isSignUp ? "signUp" : "signIn"] ? (
              <Loader />
            ) : isSignUp ? (
              "Create your Amazon account"
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {error && <small className={classes.error}>{error}</small>}

        {/* toggle text */}
        <p className={classes.toggleText}>
          {isSignUp ? "Already have an account?" : "New to Amazon?"}{" "}
          <span
            className={classes.toggleLink}
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign in" : "Create your Amazon account"}
          </span>
        </p>
      </div>
    </section>
  );
}

export default Auth;
