import React from "react";
import { Plane } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const UserPosts = ({ data }) => {
  const { id } = useParams();
  const _mapData = data.filter((res) => res.author === id);

  return (
    <div className="flex justify-center items-center flex-col border-2 bg-gray-100 min-h-screen overflow-scroll">
      <ScrollToTop smooth top={100} color="red" width="35px" />
      {_mapData.length > 0 ? (
        _mapData.map(({ title, content, author }) => (
          <div className="mt-4">
            <div className="border-gray-400 text-2xl w-[400px] md:w-[700px] bg-white shadow-lg  rounded-xl">
              <div className="">
                <p className="p-5 text-black font-bold">
                  Authored By :{" "}
                  <span className="text-red-400 underline">{author}</span>
                </p>
              </div>
              <div className=" ">
                <h1 className="text-black text-center font-extrabold text-4xl  tracking-wide font-mono">
                  {title}
                </h1>
              </div>
              <div className="">
                <p className="p-5 text-black italic tracking-wide leading-loose">
                  {content}
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

export default UserPosts;
