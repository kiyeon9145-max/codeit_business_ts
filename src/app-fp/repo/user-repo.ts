import { database } from "../database/database";
import { User, userDomainType } from "../domain/user";

export const userRepo = (userDomain: userDomainType) => {
  const { createUser } = userDomain;

  //비순수함수
  const findUserByEmail = (email: string): User | null => {
    const foundUser = database.users.find((user) => user.email === email);
    return foundUser !== undefined
      ? createUser(foundUser.email, foundUser.password, foundUser.username)
      : null;
  };

  const saveUser = (email: string, password: string, username: string) => {
    database.users.push({ email, password, username });
  };

  return {
    findUserByEmail,
    saveUser,
  };
};
