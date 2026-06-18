export class User {
  // 속성
  #email;
  #password;
  #username;

  // 메소드
  constructor(email, password, username) {
    this.#email = email;
    this.#password = password;
    this.#username = username;
  }

  getEmail() {
    return this.#email;
  }
  getPassword() {
    return this.#password;
  }
  getUsername() {
    return this.#username;
  }

  isCredentialValidate(credential) {
    const email = credential.split("-")[0];
    const password = credential.split("-")[1];

    if (this.#email === email && this.#password === password) {
      return true;
    } else {
      return false;
    }
  }
}
