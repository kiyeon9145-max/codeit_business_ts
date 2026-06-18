export class User {
  // 속성
  private email: string;
  private password: string;
  private username: string;

  // 메소드
  constructor(email: string, password: string, username: string) {
    this.email = email;
    this.password = password;
    this.username = username;
  }

  getEmail() {
    return this.email;
  }
  getPassword() {
    return this.password;
  }
  getUsername() {
    return this.username;
  }

  isCredentialValidate(credential: any) {
    const email = credential.split("-")[0];
    const password = credential.split("-")[1];

    if (this.email === email && this.password === password) {
      return true;
    } else {
      return false;
    }
  }
}
