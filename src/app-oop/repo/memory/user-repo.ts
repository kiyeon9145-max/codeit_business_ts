import { database } from "../../database/database";
import { User } from "../../domain/user";

export class UserRepo {
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
