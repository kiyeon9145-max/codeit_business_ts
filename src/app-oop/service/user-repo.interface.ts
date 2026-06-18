import { User } from "../domain/user";

export interface IUserRepo {
  findUserByEmail(email: string): User | null;
  creatUser(email: string, password: string, username: string): void;
}
