import { database } from "../../database/database";
import { User } from "../../domain/user";
import { IUserRepo } from "../../service/ports/user-repo.interface";

export class UserRepo implements IUserRepo {
  findUserByEmail(email: string): User | null {
    const foundUser = database.users.find((user) => user.email === email);
    return foundUser !== undefined
      ? new User(foundUser.email, foundUser.password, foundUser.username)
      : null;
  }

  createUser(email: string, password: string, username: string) {
    database.users.push({ email, password, username });
  }
}
