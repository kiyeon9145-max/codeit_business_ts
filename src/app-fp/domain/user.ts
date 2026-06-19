import { parseCredential } from "../util";

export type User = {
  email: string;
  password: string;
  username: string;
};

// 순수함수 + 불변성
export const userDomain = () => {
  const createUser = (
    email: string,
    password: string,
    username: string,
  ): User => {
    return { email, password, username };
  };
  const isCredentialValidate = (user: User, credential: string): boolean => {
    const { email, password } = parseCredential(credential);
    return user.email === email && user.password === password;
  };

  return {
    createUser,
    isCredentialValidate,
  };
};

export type userDomainType = ReturnType<typeof userDomain>;
