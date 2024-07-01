import React from "react";
import Post from "../_components/Post";

function HomePage() {
  return (
    <section className="flex flex-col ">
      {/* <div className="flex mt-5 gap-5 overflow-x-auto no-scrollbar  w-[478px] flex-nowrap min-w-0 flex-shrink-0">
        {[...Array(13)].map((data, index) => (
          <Story key={index} />
        ))}
      </div> */}
      <div className="flex flex-col mt-5">
        {[...Array(5)].map((data, index) => (
          <Post key={index} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
