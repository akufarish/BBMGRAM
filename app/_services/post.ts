import { Post, PostRequest } from "../_interfaces/post";
import pb from "./pocketbase";

export default function usePost() {
  async function Store(payload: PostRequest) {
    try {
      const record = await pb.collection("posts").create(payload);
      console.log(payload);
    } catch (error) {
      console.log(error);
    }
  }

  async function IndexPost() {
    const res = await pb.collection("posts").getList(1, 30, {
      expand: "user",
    });
    console.log(res.items);

    return res.items as Post[];
  }

  return {
    Store,
    IndexPost,
  };
}
