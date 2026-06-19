import { database } from "../database/database";
import { User, userDomain } from "../domain/user";
import { IUserRepo } from "../service/ports/user-repo.interface";

// 비순수함수 + 불변성
export const userRepo = (): IUserRepo => {
  const { createUser } = userDomain;

  const findUserByEmail = (email: string): User | null => {
    // 부수효과
    const foundUser = database.users.find((user) => user.email === email);
    return foundUser !== undefined
      ? createUser(foundUser.email, foundUser.password, foundUser.username)
      : null;
  };

  const saveUser = (email: string, password: string, username: string) => {
    // 부수효과
    database.users.push({ email, password, username });
  };

  return {
    findUserByEmail,
    saveUser,
  };
};

export type userRepoType = ReturnType<typeof userRepo>;
