import { IUserRepo } from "./ports/user-repo.interface";

export type UserDataType = {
  email: string;
  username: string;
  credential: string;
};

// 순수함수 + 불변성
export const authService = (userRepo: IUserRepo) => {
  const { findUserByEmail, saveUser } = userRepo;

  // 순수함수 + 불변성
  const createCredential = (email: string, password: string) => {
    return `${email}-${password}`;
  };
  // 비순수함수(부수효과를 격리) + 불변함수
  const signIn = (
    inputEmail: string,
    inputPassword: string,
  ): UserDataType | null => {
    // 부수효과(격리)
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
  ): boolean => {
    const foundUser = findUserByEmail(inputEmail);

    if (foundUser !== null) {
      return false;
    }

   saveUser(inputEmail, inputPassword, inputUsername);
    return true;
  };

  return { signIn, signUp };
};

export type UserServiceType = ReturnType<typeof authService>;
