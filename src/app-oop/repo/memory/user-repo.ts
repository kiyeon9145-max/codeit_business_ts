import { database } from "../../database/database";
import { User } from "../../domain/user";
import { IUserRepo } from "../../service/ports/user-repo.interface";

export class UserRepo implements IUserRepo {
  loadUsers(): User[] {
    return database.users.map(
      (user) => new User(user.email, user.password, user.username),
    );
  }

  createUser(email: string, password: string, username: string) {
    database.users.push({ email, password, username });
  }

  findUserByEmail(email: string): User | null {
    const foundUser = database.users.find((user) => user.email === email);
    return foundUser !== undefined
      ? new User(foundUser.email, foundUser.password, foundUser.username)
      : null;
  }
}
