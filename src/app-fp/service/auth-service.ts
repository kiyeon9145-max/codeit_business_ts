import { IUserRepo } from "./ports/user-repo.interface";

export type UserDataType = {
  email: string;
  username: string;
  credential: string;
};

export const authService = (userRepo: IUserRepo) => {
  const { findUserByEmail, saveUser } = userRepo;

  const createCredential = (email: string, password: string) => {
    return `${email}-${password}`;
  };
  const signIn = (
    inputEmail: string,
    inputPassword: string,
  ): UserDataType | null => {
    const foundUser = findUserByEmail(inputEmail);

    if (foundUser === null) {
      return null;
    }

    if (foundUser.password !== inputPassword) {
      return null;
    }

    return {
      email: foundUser.email,
      username: foundUser.username,
      credential: createCredential(foundUser.email, foundUser.password),
    };
  };
  const signUp = () => {};

  return { signIn, signUp };
};

export type UserServiceType = ReturnType<typeof authService>;
