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
    const res = await pb.collection("posts").getFullList({
      expand: "user",
    });
    console.log(res);

    return res as Post[];
  }

  return {
    Store,
    IndexPost,
  };
}
