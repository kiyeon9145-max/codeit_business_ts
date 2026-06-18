import fs from "node:fs";
import { User } from "../../domain/user";
import { IUserRepo } from "../../service/user-repo.interface";

export class UserRepo implements IUserRepo {
  filePath;

  constructor() {
    this.filePath =
      "/Users/wiz/codeit-business-1/src/app-oop/database/users.txt";
  }

  readFile() {
    const result = fs.readFileSync(this.filePath);
    return String(result).trim().split("\n");
  }

  loadUsers() {
    const result = this.readFile();
    const users = [];
    for (let i = 0; i < result.length; i++) {
      const user = new User(
        result[i].split(", ")[0],
        result[i].split(", ")[1],
        result[i].split(", ")[2],
      );
      users.push(user);
    }
    return users;
  }

  createUser(email, password, username) {
    fs.appendFileSync(this.filePath, `${email}, ${password}, ${username}\n`);
  }

  findUserByEmail(email) {
    const users = this.loadUsers();
    const foundUser = users.find((v) => v.getEmail() === email);
    return foundUser !== undefined ? foundUser : null;
  }
}
