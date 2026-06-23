import { database, UserStrogeType } from "../../database/database";
import { User } from "../../domain/user";
import { BusinessException } from "../../expetions";
import { IUserRepo } from "../../service/ports/user-repo.interface";

export class UserRepo implements IUserRepo {
  async findUserByEmail(email: string): Promise<User | null> {
    try {
      const foundUser = await database.findOne<UserStrogeType>("users", email);
      return foundUser !== undefined
        ? new User(foundUser.email, foundUser.password, foundUser.username)
        : null;
    } catch (err: any) {
    if (err.message.includes("Timeout") === true) {
      throw new BusinessException(
        "알 수 없는 서버 에러가 발생했습니다. 잠시 뒤에 다시 시도해주세요",
      );
    }

      throw err;
    }
  }

  async createUser(email: string, password: string, username: string) {
    await database.insertOne("users", { email, password, username });
  }
}
