import React from "react";
import Posts from "../_components/Post";
import usePost from "../_services/post";

async function HomePage() {
  const { IndexPost } = usePost();

  const posts = await IndexPost();

  return (
    <section className="flex flex-col ">
      {/* <div className="flex mt-5 gap-5 overflow-x-auto no-scrollbar  w-[478px] flex-nowrap min-w-0 flex-shrink-0">
        {[...Array(13)].map((data, index) => (
          <Story key={index} />
        ))}
      </div> */}
      <div className="flex flex-col mt-5">
        {posts.map((data, index) => (
          <Posts key={index} data={data} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
