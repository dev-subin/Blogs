import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../FirebaseConfig/Firebase";

const Header = ({ user, setLoggedInUser }) => {
  console.log(user);
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-center h-16 border-b-2  w-full  font-bold text-black flex place-content-between bg-white header">
      <div className="text-2xl text-left font-bold mt-4">
        <Link to={"/home"} exact>
          <i className="fa-solid fa-eye  fa-xl md:fa-2xl ml-4 md:ml-12"></i>
        </Link>
      </div>
      <div className="flex text-center">
        <button className="text-lg md:mr-5 ml-4 h-10 mt-3 border-2 rounded-lg text-center text-blue-400 w-56 border-blue-400 hover:bg-blue-500 hover:text-white hover:underline font-bold">
          <Link to={user?.displayName ? "/createpost" : "/Createaccount"}>
            {user?.displayName ? "Create Post" : "Create Account"}
          </Link>
        </button>
        <div className="flex flex-col">
          <div>
            <button className="text-xl md:ml-4 md:mr-5 h-10 w-24 md:w-36 text-black mt-3 rounded-lg hover:bg-gray-200 ">
              <Link
                to={user?.displayName ? null : "/login"}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {user?.displayName ? (
                  <img
                    src={
                      user.photoURL ||
                      "https://avatars.githubusercontent.com/u/35"
                    }
                    alt=""
                    className="border-2 border-red-900 rounded-full w-8 h-8 ml-12 "
                  />
                ) : (
                  "Login"
                )}
              </Link>
            </button>
          </div>
          {user?.displayName
            ? isOpen && (
                <div className="bg-white border-2 w-36   md:mt-5 rounded-lg cursor-pointer absolute md:relative mt-16 ">
                  <p
                    className="text-lg font-bold hover:bg-gray-100 w-full md:p-2 rounded-lg h-10 text-left hover:underline"
                    onClick={() => {
                      if (user?.displayName) {
                        localStorage.removeItem("user");
                        auth.signOut();
                        setLoggedInUser({});
                        history.push("/login");
                        setIsOpen(false);
                      }
                    }}
                  >
                    Logout
                  </p>
                  <p
                    className="text-lg font-bold hover:bg-gray-200 w-full md:p-2 rounded-lg h-10 text-left hover:underline"
                    onClick={() => {
                      history.push("/dashboard");
                      setIsOpen(false);
                      setTimeout(() => {
                        setIsOpen(false);
                      }, 3000);
                    }}
                  >
                    Dashboard
                  </p>
                </div>
              )
            : null}
        </div>
      </div>
    </nav>
  );
};

export default Header;
