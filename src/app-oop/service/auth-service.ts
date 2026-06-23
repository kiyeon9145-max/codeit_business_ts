import { IUserRepo } from "./ports/user-repo.interface";

export type UserDataType = {
  email: string;
  username: string;
  credential: string;
};

export class AuthService {
  private _userRepo: IUserRepo;

  constructor(userRepo: IUserRepo) {
    this._userRepo = userRepo;
  }

  async signIn(
    inputEmail: string,
    inputPassword: string,
  ): Promise<UserDataType | null> {
    const foundUser = await this._userRepo.findUserByEmail(inputEmail);

    if (foundUser === null) {
      return null;
    }

    if (foundUser.password !== inputPassword) {
      return null;
    }

    return {
      email: foundUser.email,
      username: foundUser.username,
      credential: `${foundUser.email}-${foundUser.password}`,
    };
  }

  signUp(
    inputEmail: string,
    inputPassword: string,
    inputUsername: string,
  ): boolean {
    const foundUser = this._userRepo.findUserByEmail(inputEmail);

    if (foundUser !== null) {
      return false;
    }

    this._userRepo.createUser(inputEmail, inputPassword, inputUsername);
    return true;
  }
}