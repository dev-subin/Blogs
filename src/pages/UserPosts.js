import React from "react";
import { Plane } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

const UserPosts = ({ data, user }) => {
  const { id } = useParams();
  const _mapData = data.filter((res) => res.author === id);

  return (
    <div className="flex justify-center items-center flex-col border-2 bg-gray-100 min-h-screen overflow-x-scroll">
      <ScrollToTop smooth top={100} color="red" width="35px" />
      {_mapData.length > 0 ? (
        _mapData.map(({ title, content, author, image, createdAt }) => (
          <div className="mt-4">
            <div className="border-gray-400 text-2xl w-[400px] md:w-[900px] bg-white shadow-lg  rounded-xl">
              <div>
                <div className="w-full p-5 ">
                  <img src={image} alt="" height="200px" />
                </div>
                <div>
                  <h1 className="text-black text-center font-bold text-xl md:text-2xl font-seri mb-5 italic tracking-wide hover:underline hover:text-blue-800">
                    {title}
                  </h1>
                </div>
              </div>
              <div className="">
                <p className="p-5 text-black italic tracking-wide leading-loose">
                  <MDEditor.Markdown
                    source={content}
                    rehypePlugins={[[rehypeSanitize]]}
                    className="text-lg"
                    style={{
                      color: "black",
                      fontSize: "25px",
                      lineHeight: "50px",
                      letterSpacing: "1px",
                      fontStyle: "italic",
                    }}
                  />
                </p>
              </div>
              <div className="flex flex-col md:flex-row md:place-content-between">
                <div className="flex">
                  <div>
                    <img
                      src={
                        user.photoURL ||
                        "https://avatars.githubusercontent.com/u/35"
                      }
                      alt=""
                      className="border-2 border-red-900 rounded-full w-8 h-8 m-2"
                    />
                  </div>
                  <div>
                    <p className="pt-2 text-black font-bold">
                      Authored By :{" "}
                      <span className="text-red-400 underline">{author}</span>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="p-3 text-lg font-bold">
                    <span className="text-lg font-bold p-3 text-red-500">
                      Created At :
                    </span>{" "}
                    {createdAt}
                  </p>
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

export default UserPosts;
