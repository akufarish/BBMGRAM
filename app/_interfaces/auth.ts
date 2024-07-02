interface RegisterPayload {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

interface LoginPayload {
  identity: string;
  password: string;
}
