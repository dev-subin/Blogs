import React from "react";
import { Plane } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import MDEditor from "@uiw/react-md-editor";

const SinglePoster = ({ data, user }) => {
  const { blog } = useParams();

  const _mapData = data.filter((res) => res.title === blog);
  return (
    <div className="flex justify-center items-center border-2 bg-gray-100 min-h-screen">
      <ScrollToTop smooth top={100} color="red" width="35px" />
      {_mapData.length > 0 ? (
        _mapData.map(({ title, content, author, image, createdAt }) => (
          <div className="border-gray-400 text-2xl w-[400px] md:w-[900px] bg-white shadow-lg  rounded-xl">
            <div className="w-full p-5 md:flex md:justify-center md:items-center">
              <img key="{image}" src={image} alt="" className="rounded-lg" />
            </div>
            <div>
              <h1
                className="text-black text-center font-bold text-xl md:text-5xl font-seri mb-5 italic tracking-wide hover:underline hover:text-blue-800"
                key="{title}"
              >
                {title}
              </h1>
            </div>
            <div className="p-5 text-xl">
              <MDEditor.Markdown
                key="{content}"
                source={content}
                className="text-xl"
                style={{
                  color: "black",
                  fontSize: "25px",
                  lineHeight: "50px",
                  letterSpacing: "1px",
                  fontStyle: "italic",
                }}
              />
            </div>
            <div className="flex flex-col md:flex-row md:place-content-between">
              <div className="flex">
                {user?.displayName && (
                  <img
                    key="{user.photoURL}"
                    src={
                      user.photoURL ||
                      "https://avatars.githubusercontent.com/u/35"
                    }
                    alt=""
                    className="border-2 border-red-900 rounded-full w-8 h-8 ml-12 m-2"
                  />
                )}
                <div>
                  <p className="p-2 text-black font-bold">
                    Authored By :{" "}
                    <span className="text-red-400 underline" key="{author}">
                      {author}
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <p className="p-3 text-lg font-bold" key="{createdAt}">
                  <span className="text-lg font-bold p-3 text-red-500">
                    Created At :
                  </span>
                  {createdAt}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Plane ariaLabel="loading-indicator" />
      )}
    </div>
  );
};

export default SinglePoster;
