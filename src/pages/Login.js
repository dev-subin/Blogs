import React, { useState } from "react";
import { auth, googleAuth } from "../FirebaseConfig/Firebase";
import { useHistory } from "react-router-dom";
import { Plane } from "react-loader-spinner";

function Login({ setLoggedInUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loader, setLoader] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    setLoader(!loader);
    if (emailError === 0) {
      setEmailError("please Enter Your Email...");
      setTimeout(() => {
        setEmailError("");
      }, 3000);
    }
    if (password.length === 0) {
      setPasswordError("please Enter Your Password...");
      setTimeout(() => {
        setPasswordError("");
      }, 3000);
    }
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user) {
          setLoggedInUser(res.user);
          history.push("/home");
          localStorage.setItem("user", JSON.stringify(res.user));
          setEmail("");
          setPassword("");
        }
      })
      .catch((err) => {
        setError(err.message);
        setTimeout(() => {
          setError("");
        }, 3000);
        setEmail("");
        setPassword("");
      });
  };
  const handleClick = () => {
    setLoader(!loader);
    if (email.length === 0) {
      setEmailError("please Enter Your Email...");
      setTimeout(() => {
        setEmailError("");
      }, 3000);
    }
    if (password.length === 0) {
      setPasswordError("please Enter Your Password...");
      setTimeout(() => {
        setPasswordError("");
      }, 3000);
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user) {
          setLoggedInUser(res.user);
          history.push("/home");
          localStorage.setItem("user", JSON.stringify(res.user));
          setEmail("");
          setPassword("");
        }
      })
      .catch((err) => {
        setError(err.message);
        setTimeout(() => {
          setError("");
        }, 3000);
        setEmail("");
        setPassword("");
      });
  };

  const googleLogin = () => {
    <Plane ariaLabel="loading-indicator" />;
    auth.signInWithPopup(googleAuth).then((res) => {
      if (res.user) {
        setLoggedInUser(res.user);
        history.push("/home");
        localStorage.setItem("user", JSON.stringify(res.user));
      } else {
        history.push("/login");
      }
    });
  };
  return (
    <div className="flex justify-center items-center flex-col h-[100vh] bg-gray-100 ">
      {error && (
        <div className=" bg-white  w-96 h-auto mb-5 rounded-lg">
          <p className="text-center pt-2 text-red-500 text-lg font-bold">
            {error}
          </p>
        </div>
      )}
      <div className="w-96  rounded-lg bg-white">
        <div className="mt-12">
          <form action="" onSubmit={handleSubmit}>
            <div className="ml-4 mt-12 mr-4">
              <label htmlFor="" className="text-lg md:text-xl font-bold">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`text-left border-2 outline-black focus:outline-blue-700 rounded-lg w-full text-xl  h-10 md:h-14 ${
                  emailError && "border-red-500"
                }`}
              />
              {emailError && (
                <p className=" text-red-500 font-bold p-2 text-lg rounded-lg">
                  {emailError}
                </p>
              )}
            </div>
            <div className="ml-4 mt-12 mr-4 ">
              <label htmlFor="" className="text-lg md:text-xl font-bold">
                Password
              </label>
              <input
                type="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`text-left border-2 outline-black focus:outline-blue-700 rounded-lg w-full text-xl  h-10 md:h-14 ${
                  passwordError && "border-red-500"
                }`}
              />
              {passwordError && (
                <p className=" text-red-500 font-bold p-2 text-lg rounded-lg">
                  {passwordError}
                </p>
              )}
            </div>
            <div className="flex justify-center items-center mb-8 mt-12 h-16">
              <button
                className="border-2 bg-blue-700 w-72 text-white font-bold text-lg  md:text-2xl rounded-lg h-10 md:h-14"
                onClick={handleClick}
              >
                {loader ? (
                  <span className="texxt-white animate-bounce">Loading...</span>
                ) : (
                  "Signin"
                )}
              </button>
            </div>

            <div className="flex justify-center items-center">
              <button
                className="border-2 bg-red-900 w-36 h-10 md:h-12 mb-5 rounded-lg text-white font-bold"
                onClick={googleLogin}
              >
                GOOGLE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
