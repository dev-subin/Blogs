import React from "react";
import { Plane } from "react-loader-spinner";
import { useHistory } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

function Home({ data, user }) {
  console.log(data);
  const history = useHistory();
  return (
    <div className="flex justify-center items-center flex-col border-2 bg-gray-200 dark:bg-[#012346] min-h-screen overflow-hidden">
      <ScrollToTop smooth top={100} color="red" width="35px" />
      {data.length > 0 ? (
        data.map(({ title, author, image, createdAt }) => (
          <div className="mt-4">
            <div className="  border-2 text-2xl w-[400px] md:w-[900px] bg-white shadow-2xl shadow-cyan-500/50 rounded-xl cursor-pointer h-auto md:h-auto  ">
              <div onClick={() => history.push(`/${author}/post/${title}`)}>
                <div className="w-full p-5 min-h-56 rounded-xl flex justify-center items-center">
                  <img
                    src={image}
                    alt=""
                    height="200px"
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <h1 className="text-black text-center font-bold text-2xl md:text-5xl font-seri mb-5 italic tracking-wide hover:underline hover:text-blue-800">
                    {title}
                  </h1>
                </div>
              </div>
              <div className="flex md:flex-row flex-col place-content-between">
                <div onClick={() => history.push(`/${author}/posts`)}>
                  <div className="flex">
                    <div>
                      <img
                        src={
                          user.photoURL ||
                          "https://avatars.githubusercontent.com/u/35"
                        }
                        alt=""
                        className="border-2 border-red-900 rounded-full w-8 h-8 ml-12 m-2"
                      />
                    </div>
                    <div>
                      <p className="p-2 text-black font-bold text-lg md:text-xl">
                        Authored By :{" "}
                        <span className="text-red-400 hover:underline italic">
                          {author}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="p-3 text-lg font-bold">
                    <span className="text-lg font-bold p-3 text-red-500">
                      Created At :
                    </span>
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
}

export default Home;
