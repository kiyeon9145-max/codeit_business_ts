import fs from "node:fs";
import { User } from "../../domain/user";
import { IUserRepo } from "../../service/ports/user-repo.interface";

export class UserRepo implements IUserRepo {
  private _filePath;

  constructor() {
    this._filePath =
      "/Users/wiz/codeit-business-1/src/app-oop/database/users.txt";
  }

  readFile() {
    const result = fs.readFileSync(this._filePath);
    return String(result).trim().split("\n");
  }

  async loadUsers() {
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

  async createUser(email: string, password: string, username: string) {
    fs.appendFileSync(this._filePath, `${email}, ${password}, ${username}\n`);
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const users = await this.loadUsers();
    const foundUser = users.find((v) => v.email === email);
    return foundUser !== undefined ? foundUser : null;
  }
}
