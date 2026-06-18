export class AuthService {
  // 속성
  #userRepo;

  // 메소드
  constructor(userRepo) {
    this.#userRepo = userRepo;
  }

  signIn(inputEmail, inputPassword) {
    const users = this.#userRepo.loadUsers();

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

  signUp(inputEmail, inputPassword, inputUsername) {
    const users = this.#userRepo.loadUsers();
    for (let i = 0; i < users.length; i = i + 1) {
      if (users[i].getEmail() === inputEmail) {
        return false;
      }
    }

    this.#userRepo.createUser(inputEmail, inputPassword, inputUsername);
    return true;
  }
}
