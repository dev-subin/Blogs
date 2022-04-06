import React from "react";
import { useHistory } from "react-router-dom";

const Dashboard = ({ data }) => {
  const history = useHistory();
  return (
    <div className="h-screen flex justify-center items-center flex-col bg-gray-100 overflow-scroll">
      {data ? (
        data.map(({ title }) => {
          return (
            <div
              className="bg-white tracking-wide"
              onClick={() => history.push(`/${title}/post`)}
            >
              <div className=" w-[400px] md:w-[700px] rounded-lg flex place-content-between">
                <div className=" h-auto text-left pl-5 font-bold text-lg text-black  pt-4 rounded-lg w-full">
                  <p
                    className="text-black mb-5
             text-xl cursor-pointer mt-5 "
                    key={title}
                  >
                    {title}
                  </p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="font-bold text-2xl bg-red-500 p-5 text-center rounded-lg text-white animate-ping">
          No data found....!🙂
        </h1>
      )}
    </div>
  );
};

export default Dashboard;
