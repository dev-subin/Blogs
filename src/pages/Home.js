import React from "react";
import { Plane } from "react-loader-spinner";
import { useHistory } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import MouseParticles from "react-mouse-particles";

function Home({ data }) {
  const history = useHistory();
  return (
    <div className="flex justify-center items-center flex-col border-2 bg-gray-100 dark:bg-[#012346] min-h-screen overflow-hidden">
      <MouseParticles g={1} color="random" cull="col,image-wrapper" />
      <ScrollToTop smooth top={100} color="red" width="35px" />
      {data.length > 0 ? (
        data.map(({ title, author, image, createdAt }) => (
          <div className="mt-4">
            <div className="  border-2 text-2xl w-[400px] md:w-[700px] bg-white rounded-xl cursor-pointer h-auto md:h-auto  ">
              <div onClick={() => history.push(`/${author}/post/${title}`)}>
                <div className="w-full p-5 min-h-56 rounded-xl">
                  <img
                    src={image}
                    alt=""
                    height="200px"
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <h1 className="text-black text-center font-bold text-xl md:text-2xl font-seri mb-5 italic tracking-wide hover:underline hover:text-blue-800">
                    {title}
                  </h1>
                </div>
              </div>
              <div className="flex">
                <div onClick={() => history.push(`/${author}/posts`)}>
                  <p className="p-2 text-black font-bold text-lg md:text-xl">
                    Authored By :{" "}
                    <span className="text-red-400 hover:underline italic">
                      {author}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="p-3 text-lg font-bold">{createdAt}</p>
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
