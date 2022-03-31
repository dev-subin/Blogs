import React from "react";
import { useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";

const UserContent = ({ data, user }) => {
  const { id } = useParams();
  const mapData = data.filter((res) => res.title === id);
  console.log(mapData);

  return (
    <div className="flex justify-center items-center  overflow-scroll  border-2 bg-gray-100 min-h-screen ">
      {mapData.map(({ title, content, author, image, createdAt }) => {
        return (
          <div className="">
            <div className="border-gray-400 text-2xl w-[400px] md:w-[900px]  bg-white rounded-lg ">
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
              <div className="">
                <p className="p-5 text-black italic tracking-wide leading-loose">
                  <MDEditor.Markdown
                    source={content}
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
              <div className="flex flex-col md:flex-row">
                <div className="flex">
                  {user?.displayName ? (
                    <img
                      src={
                        user.photoURL ||
                        "https://avatars.githubusercontent.com/u/35"
                      }
                      alt=""
                      className="border-2 border-red-900 rounded-full w-8 h-8 ml-12 m-2"
                    />
                  ) : null}
                  <div>
                    <p className="p-2 text-black font-bold">
                      Authored By :{" "}
                      <span className="text-red-400 underline">{author}</span>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="p-3 text-lg font-bold">{createdAt}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserContent;
