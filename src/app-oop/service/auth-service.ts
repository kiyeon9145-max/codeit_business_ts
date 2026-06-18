import { UserRepo } from "../repo/file/user-repo";

export type UserDataType = {
  email: string;
  username: string;
  credential: string;
};

export class AuthService {
  private _userRepo: UserRepo;

  constructor(userRepo: UserRepo) {
    this._userRepo = userRepo;
  }

  signIn(inputEmail: string, inputPassword: string): UserDataType | null {
    const foundUser = this._userRepo.findUserByEmail(inputEmail);

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
