import React from "react";
import { useParams } from "react-router-dom";

const UserContent = ({ data }) => {
  const { id } = useParams();
  const mapData = data.filter((res) => res.title === id);

  return (
    <div className="flex justify-center items-center  overflow-scroll  border-2 bg-gray-100 ">
      {mapData.map(({ title, content, author }) => {
        return (
          <div className="">
            <div className="border-gray-400 text-2xl w-[400px] md:w-[700px] h-[400px] bg-white rounded-lg ">
              <div className="">
                <p className="p-5 text-black font-bold">
                  Authored By :{" "}
                  <span className="text-red-400 underline">{author}</span>
                </p>
              </div>
              <div className=" ">
                <h1 className="text-black text-center font-bold text-4xl font-serif">
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
        );
      })}
    </div>
  );
};

export default UserContent;
