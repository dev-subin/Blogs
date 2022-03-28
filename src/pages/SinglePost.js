import React from "react";
import { Plane } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import MDEditor from "@uiw/react-md-editor";
import MouseParticles from "react-mouse-particles";

const SinglePost = ({ data, user }) => {
  console.log(user);
  const { blog } = useParams();

  const _mapData = data.filter((res) => res.title === blog);
  // console.log(_mapData);
  return (
    <div className="flex justify-center items-center border-2 bg-gray-100 min-h-screen ">
      <MouseParticles g={1} color="random" cull="col,image-wrapper" />
      <ScrollToTop smooth top={100} color="red" width="35px" />
      {_mapData.length > 0 ? (
        _mapData.map(({ title, content, author, image, createdAt }) => (
          <div className="">
            <div className="border-gray-400 text-2xl w-[400px] md:w-[700px] bg-white shadow-lg  rounded-xl">
              <div>
                <div className="w-full p-5">
                  <img src={image} alt="" />
                </div>
                <div>
                  <h1 className="text-black text-center font-bold text-xl md:text-2xl font-seri mb-5 italic tracking-wide hover:underline hover:text-blue-800">
                    {title}
                  </h1>
                </div>
              </div>
              <div className="p-5 text-xl">
                <MDEditor.Markdown
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
              <div className="flex">
                {user?.displayName && (
                  <img
                    src={
                      user.photoURL ||
                      "https://avatars.githubusercontent.com/u/35"
                    }
                    alt=""
                    className="border-2 border-red-900 rounded-full w-8 h-8 ml-12 m-2"
                  />
                )}
                <div className="flex">
                  <div>
                    <p className="p-2 text-black font-bold">
                      Authored By :{" "}
                      <span className="text-red-400 underline">{author}</span>
                    </p>
                  </div>
                  <div>
                    <p className="p-3 text-lg font-bold">{createdAt}</p>
                  </div>
                </div>
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

export default SinglePost;
