import React, { useState } from "react";
import { db, storage } from "../FirebaseConfig/Firebase";
import { useHistory } from "react-router-dom";
import MdEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

function CreatePost({ loggedInUser }) {
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loader, setLoader] = useState(false);
  const history = useHistory();
  const date = new Date();

  const handleSubmit = (e) => {
    setLoader(!loader);
    e.preventDefault();
    storage
      .ref(`/image/${image.name}`)
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          console.log(url);
        });
      });
    db.collection("posts").add({
      title: heading,
      content: content,
      author: loggedInUser.displayName,
      image: image,
      createdAt: date.toDateString(),
      userImage: loggedInUser.photoURL,
    });
    setHeading("");
    setContent("");
    history.push("/home");
  };
  const handleClick = () => {
    setLoader(!loader);
    storage
      .ref(`/image/${image.name}`)
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          console.log(url);
          db.collection("posts").add({
            title: heading,
            content: content,
            author: loggedInUser.displayName,
            image: url,
            createdAt: date.toDateString(),
          });
          setHeading("");
          setContent("");
          history.push("/home");
        });
      });
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
            <div>
              {image ? (
                <img
                  alt="Posts"
                  width="200px"
                  height="200px"
                  src={image ? URL.createObjectURL(image) : null}
                ></img>
              ) : null}
              <br />
              <input
                type="file"
                className="font-bold text-xl italic cursor-pointer ml-5"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
              <br />
            </div>
            <div className="flex justify-center items-center mt-12">
              <input
                type="text"
                placeholder="New post title here..."
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                className=" w-full text-2xl md:text-4xl outline-none font-bold text-black pl-5"
              />
            </div>
            <div className="flex justify-center items-center mt-20 text-5xl">
              <MdEditor
                value={content}
                onChange={setContent}
                previewOptions={{
                  rehypePlugins: [[rehypeSanitize]],
                }}
                style={{ fontSize: "20px", width: "100vh" }}
              ></MdEditor>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center mb-4 mt-2 h-16">
        <button
          onClick={handleClick}
          className="border-2 bg-blue-700 w-56 md:w-72 text-white font-bold text-lg  md:text-2xl rounded-lg h-10 md:h-14"
        >
          {loader ? (
            <span className="text-white aniamte-pulse">Loading...</span>
          ) : (
            "publish your post"
          )}
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
