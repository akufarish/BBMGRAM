import { User } from "./user";

export interface PostRequest {
  caption: string;
  image: File | undefined;
  user: string;
}

export interface Post {
  collectionId: string;
  id?: string;
  caption?: string;
  image?: string;
  created?: string;
  expand?: {
    user: User;
  };
}
