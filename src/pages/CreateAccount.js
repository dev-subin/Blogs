import React, { useState } from "react";
import { auth, db, googleAuth } from "../FirebaseConfig/Firebase";
import { useHistory } from "react-router-dom";

function CreateAccount({ setLoggedInUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
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
    setUsername("");
    setEmail("");
    setPassword("");
    setPhone("");
  };
  const handleClick = () => {
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
    setUsername("");
    setEmail("");
    setPassword("");
    setPhone("");
  };
  const googleLogin = () => {
    auth.signInWithPopup(googleAuth).then((res) => {
      if (res.user) {
        setLoggedInUser(res.user);
        history.push("/home");
        localStorage.setItem("user", JSON.stringify(res.user));
      }
    });
  };
  return (
    <div className="flex justify-center items-center h-screen  bg-gray-100">
      <div className="  w-[450px] md:w-[700px] rounded-lg  border-white bg-white ">
        <div className="mt-12">
          <form action="" onSubmit={handleSubmit}>
            <div className="ml-4 mr-4">
              <label htmlFor="" className=" text-lg md:text-xl font-bold">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="text-left border-2   outline-black h-10 md:h-14  rounded-lg focus:outline-blue-700 w-full text-lg md:text-xl   text-black"
              />
            </div>
            <div className="ml-4 mt-12 mr-4">
              <label htmlFor="" className="text-lg md:text-xl font-bold">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-left  h-10 md:h-14 border-2 outline-black  focus:outline-blue-700 rounded-lg  w-full text-lg md:text-xl  text-black"
              />
            </div>
            <div className="ml-4 mt-12 mr-4">
              <label htmlFor="" className="text-lg md:text-xl font-bold">
                Phone
              </label>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="text-left h-10 md:h-14 border-2 outline-black  focus:outline-blue-700 rounded-lg w-full text-lg md:text-xl  text-black"
              />
            </div>
            <div className="ml-4 mt-12 mr-4">
              <label htmlFor="" className="text-lg md:text-xl font-bold">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-left  h-10 md:h-14 border-2 outline-black focus:outline-blue-700 rounded-lg w-full text-lg md:text-xl  text-black"
              />
            </div>
            <div className="flex justify-center items-center mb-8 mt-12 h-16">
              <button
                className="border-2 h-10 md:h-14 outline-black bg-blue-700 w-56  md:w-72 text-white font-bold  text-lg md:text-2xl rounded-lg"
                onClick={handleClick}
              >
                Signup
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="border-2 bg-red-900 w-36 text-white  font-bold mb-5 h-10 md:h-12 rounded-lg"
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

export default CreateAccount;
