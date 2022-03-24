import React, { useState } from "react";
import { db } from "../FirebaseConfig/Firebase";
import { useHistory } from "react-router-dom";

function CreatePost({ loggedInUser }) {
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      title: heading,
      content: content,
      author: loggedInUser.displayName,
    });
    setHeading("");
    setContent("");
    history.push("/home");
  };
  const handleClick = () => {
    db.collection("posts").add({
      title: heading,
      content: content,
      author: loggedInUser.displayName,
    });
    setHeading("");
    setContent("");
    history.push("/home");
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col bg-gray-100">
      <div className="mb-12">
        <h1 className="text-left text-2xl md:text-5xl text-black font-bold ">
          Create Post
        </h1>
      </div>
      <div className=" w-[400px] md:w-[900px] rounded-lg bg-white">
        <div className="mt-12">
          <form action="" onSubmit={handleSubmit}>
            <div className="flex justify-center items-center mt-12">
              <input
                type="text"
                placeholder="New post title here..."
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                className=" w-full text-2xl md:text-4xl outline-none font-bold text-black pl-5"
              />
            </div>
            <div className="flex justify-center items-center mt-20 ">
              <reactMarkdown>
                <textarea
                  name=""
                  id=""
                  cols="100"
                  rows="10"
                  placeholder="Write your post content here.."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="text-lg md:text-2xl text-black rounded-lg outline-none w-full pl-5"
                ></textarea>
              </reactMarkdown>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center mb-4 mt-2 h-16">
        <button
          onClick={handleClick}
          className="border-2 bg-blue-700 w-56 md:w-72 text-white font-bold text-lg md:text-xl md:text-2xl rounded-lg h-10 md:h-14"
        >
          Publish Your Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
