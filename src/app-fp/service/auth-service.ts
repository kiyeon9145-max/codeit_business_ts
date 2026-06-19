import { createCredential } from "../util";
import { IUserRepo } from "./ports/user-repo.interface";

export type UserDataType = {
  email: string;
  username: string;
  credential: string;
};

// 순수함수 + 불변성
export const authService = (userRepo: IUserRepo) => {
  const { findUserByEmail, saveUser } = userRepo;

  // 비순수함수(부수효과를 격리) + 불변성
  const signIn = (
    inputEmail: string,
    inputPassword: string,
  ): UserDataType | null => {
    // 부수효과(userRepo에 격리되어 있습니다)
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
  // 비순수함수(부수효과를 격리) + 불변성
  const signUp = (
    inputEmail: string,
    inputPassword: string,
    inputUsername: string,
  ) => {
    // 부수효과(userRepo에 격리되어 있습니다)
    const foundUser = findUserByEmail(inputEmail);

    if (foundUser !== null) {
      return false;
    }

    // 부수효과(userRepo에 격리되어 있습니다)
    saveUser(inputEmail, inputPassword, inputUsername);
    return true;
  };

  return { signIn, signUp };
};

export type UserServiceType = ReturnType<typeof authService>;