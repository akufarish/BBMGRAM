import { PostRequest } from "../_interfaces/post";
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

  return {
    Store,
  };
}
