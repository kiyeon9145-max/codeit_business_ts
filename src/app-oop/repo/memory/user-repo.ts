import { database } from "../../database/database.js";
import { User } from "../../domain/user.js";

export class UserRepo {
  loadUsers() {
    const users: User[] = [];

    for (let i = 0; i < database.users.length; i = i + 1) {
      const user = new User(
        database.users[i].email,
        database.users[i].password,
        database.users[i].username,
      );
      users.push(user);
    }

    return users;
  }

  createUser(email: string, password: string, username: string) {
    const newUser = {
      email: email,
      password: password,
      username: username,
    };
    database.users.push(newUser);
  }

  findUserByEmail(email: string): User | null {
    for (let i = 0; i < database.users.length; i = i + 1) {
      if (database.users[i].email === email) {
        return new User(
          database.users[i].email,
          database.users[i].password,
          database.users[i].username,
        );
      }
    }

    return null;
  }
}