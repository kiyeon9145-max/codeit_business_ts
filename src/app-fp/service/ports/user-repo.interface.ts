import { User } from "../../domain/user";

export interface IUserRepo {
  findUserByEmail(email: string): User | null;
  saveUser(email: string, password: string, username: string): void;
}
