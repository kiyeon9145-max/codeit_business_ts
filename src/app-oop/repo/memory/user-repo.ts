import { database, UserStrogeType } from "../../database/database";
import { User } from "../../domain/user";
import { IUserRepo } from "../../service/ports/user-repo.interface";

export class UserRepo implements IUserRepo {
  async findUserByEmail(email: string): Promise<User | null> {
    const foundUser = await database.findOne<UserStrogeType>("users", email);
    return foundUser !== undefined
      ? new User(foundUser.email, foundUser.password, foundUser.username)
      : null;
  }

  async createUser(email: string, password: string, username: string) {
    await database.insertOne("users", { email, password, username });
  }
}
