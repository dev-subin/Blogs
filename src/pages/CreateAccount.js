import React, { useState } from "react";
import { auth, db } from "../FirebaseConfig/Firebase";
import { useHistory } from "react-router-dom";
import { Plane } from "react-loader-spinner";

function CreateAccount({ setLoggedInUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userError, setUserError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    <Plane ariaLabel="loading-indicator" />;
    e.preventDefault();
    if (username.length === 0) {
      setUserError("Username is empty...");
      setTimeout(() => {
        setUserError("");
      }, 3000);
    } else {
      setUsername();
    }
    if (email.length === 0) {
      setEmailError("Email is empty...");
      setTimeout(() => {
        setEmailError("");
      }, 3000);
    }
    if (phone.length === 0) {
      setPhoneError("Phone number is empty...");
      setTimeout(() => {
        setPhoneError("");
      }, 3000);
    }
    if (password.length === 0) {
      setPasswordError("Password is empty...");
      setTimeout(() => {
        setPasswordError("");
      }, 3000);
    }
    auth.createUserWithEmailAndPassword(email, password).then((result) => {
      if (result.user) {
        db.collection("users").add({
          id: result.user.uid,
          username: username,
          phone: phone,
        });
        history.push("/login");
        return result.user.updateProfile({ displayName: username });
      } else {
        alert("error!");
      }
    });
    // setUsername("");
    // setEmail("");
    // setPassword("");
    // setPhone("");
  };
  const handleClick = () => {
    <Plane ariaLabel="loading-indicator" />;
    if (username.length === 0) {
      setUserError("Username is empty...");
      setTimeout(() => {
        setUserError("");
      }, 3000);
    } else {
      setUsername();
    }
    if (email.length === 0) {
      setEmailError("Email is empty...");
      setTimeout(() => {
        setEmailError("");
      }, 3000);
    }
    if (phone.length === 0) {
      setPhoneError("Phone number is empty...");
      setTimeout(() => {
        setPhoneError("");
      }, 3000);
    }
    if (password.length === 0) {
      setPasswordError("Password is empty...");
      setTimeout(() => {
        setPasswordError("");
      }, 3000);
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        if (result.user) {
          db.collection("users").add({
            id: result.user.uid,
            username: username,
            phone: phone,
          });
          history.push("/login");
          return result.user.updateProfile({ displayName: username });
        } else {
          alert("error!");
        }
      })
      .catch((err) => {
        setError(err.message);
        setTimeout(() => {
          setError("");
        }, 3000);
      });
    // setUsername("");
    // setEmail("");
    // setPassword("");
    // setPhone("");
  };
  return (
    <div className="flex justify-center items-center h-screen flex-col bg-gray-100">
      {error && (
        <p className="bg-red-500 text-white font-bold p-2 text-lg mb-5 rounded-lg">
          {error}....
        </p>
      )}
      <div className="  w-[450px] md:w-[700px] rounded-lg  border-white bg-white ">
        <div className="mt-12">
          <form action="" onSubmit={handleSubmit}>
            <div className="ml-4 mr-4">
              <label
                htmlFor=""
                className={`{ text-lg md:text-xl font-bold ${
                  userError && "text-red-500"
                }`}
              >
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`text-left border-2   p-5 h-10 md:h-14  rounded-lg outline-none w-full text-lg md:text-xl focus:border-blue-700   text-black ${
                  userError && "border-red-500"
                }`}
              />
              {userError && (
                <p className=" text-red-500 font-bold p-2 text-lg rounded-lg">
                  {userError}
                </p>
              )}
            </div>
            <div className="ml-4 mt-12 mr-4">
              <label htmlFor="" className="text-lg md:text-xl font-bold">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`text-left  h-10 md:h-14 border-2 p-5 focus:border-blue-700  rounded-lg outline-none  w-full text-lg md:text-xl  text-black ${
                  emailError && "border-red-500"
                }`}
              />
              {emailError && (
                <p className=" text-red-500 font-bold p-2 text-lg rounded-lg">
                  {emailError}
                </p>
              )}
            </div>
            <div className="ml-4 mt-12 mr-4">
              <label htmlFor="" className="text-lg md:text-xl font-bold">
                Phone
              </label>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`text-left h-10 md:h-14 border-2 p-5 focus:border-blue-700 rounded-lg outline-none w-full text-lg md:text-xl  text-black ${
                  phoneError && " border-red-500"
                }`}
              />
              {phoneError && (
                <p className=" text-red-500 font-bold p-2 text-lg rounded-lg">
                  {phoneError}
                </p>
              )}
            </div>
            <div className="ml-4 mt-12 mr-4">
              <label htmlFor="" className="text-lg md:text-xl font-bold">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`text-left h-10 md:h-14 border-2 p-5 focus:border-blue-700 rounded-lg outline-none w-full text-lg md:text-xl  text-black ${
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
                className="border-2 h-10 md:h-14 outline-black bg-blue-700 w-56  md:w-72 text-white font-bold  text-lg md:text-2xl rounded-lg"
                onClick={handleClick}
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
