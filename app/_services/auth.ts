import { useRouter } from "next/navigation";
import pb from "./pocketbase";

export default function useAuth() {
  const navigate = useRouter();

  async function OauthLogin() {
    try {
      const authData = await pb
        .collection("users")
        .authWithOAuth2({ provider: "google" });
      navigate.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function Register(payload: RegisterPayload) {
    try {
      const data: RegisterPayload = {
        email: payload.email,
        username: payload.username,
        password: payload.password,
        passwordConfirm: payload.password,
      };
      await pb.collection("users").create(data);
      navigate.push("/login");
    } catch (error) {
      console.log(error);
    }
  }

  async function Login(payload: LoginPayload) {
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(payload.identity, payload.password);
      navigate.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return {
    Register,
    OauthLogin,
    Login,
  };
}
