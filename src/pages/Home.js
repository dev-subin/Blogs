import React from "react";
import { Plane } from "react-loader-spinner";
import { useHistory } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

function Home({ data }) {
  const history = useHistory();
  return (
    <div className="flex justify-center items-center flex-col border-2 bg-gray-100 min-h-screen overflow-hidden">
      <ScrollToTop smooth top={100} color="red" width="35px" />
      {data.length > 0 ? (
        data.map(({ title, author }) => (
          <div className="mt-4">
            <div className="  border-2 text-2xl w-[400px] md:w-[700px] bg-white rounded-xl cursor-pointer h-36 md:h-36 text-green-900 ">
              <div onClick={() => history.push(`/${author}/posts`)}>
                <p className="p-5 text-black font-bold text-lg md:text-xl">
                  Authored By :{" "}
                  <span className="text-red-400 hover:underline italic">
                    {author}
                  </span>
                </p>
              </div>
              <div>
                <h1
                  onClick={() => history.push(`/${author}/post/${title}`)}
                  className="text-black text-center font-bold text-xl md:text-2xl font-seri mb-5 italic tracking-wide hover:underline"
                >
                  {title}
                </h1>
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
