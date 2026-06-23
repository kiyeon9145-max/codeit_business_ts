import { User } from "../../domain/user";

export interface IUserRepo {
  findUserByEmail(email: string): Promise<User | null>;
  createUser(email: string, password: string, username: string): void;
}
