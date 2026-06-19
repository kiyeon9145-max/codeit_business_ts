import { database } from "../database/database";
import { createUser, User } from "../domain/user";

//비순수함수
export const findUserByEmail =(email: string): User | null => {
    const foundUser = database.users.find((user) => user.email === email);
    return foundUser !== undefined
      ? createUser(foundUser.email, foundUser.password, foundUser.username)
      : null;
  };

  export const  saveUser = (email: string, password: string, username: string) => {
    database.users.push({ email, password, username });
  }