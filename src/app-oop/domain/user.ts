export class User {
  private _email: string;
  private _password: string;
  private _username: string;

  constructor(email: string, password: string, username: string) {
    this._email = email;
    this._password = password;
    this._username = username;
  }

  get email() {
    return this._email;
  }
  get password() {
    return this._password;
  }
  get username() {
    return this._username;
  }

  isCredentialValidate(credential: string): boolean {
    const [email, password] = credential.split("-");
    return this._email === email && this._password === password;
  }
}
