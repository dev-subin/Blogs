import React, { useState } from "react";
import { auth, db } from "../FirebaseConfig/Firebase";
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
  const handleClick = (e) => {
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
                className="text-left border-2   p-5 h-10 md:h-14  rounded-lg outline-none w-full text-lg md:text-xl   text-black"
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
                className="text-left  h-10 md:h-14 border-2 p-5   rounded-lg outline-none  w-full text-lg md:text-xl  text-black"
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
                className="text-left h-10 md:h-14 border-2 p-5  rounded-lg outline-none w-full text-lg md:text-xl  text-black"
              />
            </div>
            <div className="ml-4 mt-12 mr-4">
              <label htmlFor="" className="text-lg md:text-xl font-bold">
                Password
              </label>
              <div className="flex place-content-between text-left  h-10 md:h-14 border-2 outline-black  rounded-lg w-full text-lg md:text-xl  text-black">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full outline-none rounded-lg p-5"
                />
              </div>
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
