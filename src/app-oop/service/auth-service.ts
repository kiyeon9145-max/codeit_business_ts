import { UserRepo } from "../repo/file/user-repo";

export class AuthService {
  // 속성
  private userRepo: UserRepo;

  // 메소드
  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo;
  }

  signIn(inputEmail: string, inputPassword: string) {
    const users = this.userRepo.loadUsers();

    for (let i = 0; i < users.length; i = i + 1) {
      if (
        users[i].getEmail() === inputEmail &&
        users[i].getPassword() === inputPassword
      ) {
        return {
          email: users[i].getEmail(),

          username: users[i].getUsername(),
          credential: `${users[i].getEmail()}-${users[i].getPassword()}`,
        };
      }
    }

    return null;
  }

  signUp(inputEmail: string, inputPassword: string, inputUsername: string) {
    const users = this.userRepo.loadUsers();
    for (let i = 0; i < users.length; i = i + 1) {
      if (users[i].getEmail() === inputEmail) {
        return false;
      }
    }

    this.userRepo.createUser(inputEmail, inputPassword, inputUsername);
    return true;
  }
}
