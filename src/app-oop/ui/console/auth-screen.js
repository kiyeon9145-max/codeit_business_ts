import { prompt } from "../../util.js";

export class AuthScreen {
  // 인스턴스 속성(변수)
  #authService;

  // 메소드(함수)
  constructor(authService) {
    this.#authService = authService;
  }

  showAuthUI() {
    return prompt("로그인(0), 회원 가입(1), 종료(q): ");
  }

  showSignInUI() {
    const inputEmail = prompt("이메일: ");
    if (inputEmail.includes("@") === false) {
      console.log("올바른 이메일 형식이 아닙니다.");
      return;
    }

    const inputPassword = prompt("비밀번호: ");
    if (inputPassword.length < 4) {
      console.log("비밀번호는 최소 4자 이상입니다.");
      return;
    }

    const user = this.#authService.signIn(inputEmail, inputPassword);
    if (user === null) {
      console.log("이메일 또는 비밀번호가 일치하지 않습니다.\n");
      return;
    }

    return user;
  }

  showSignUpUI() {
    const inputEmail = prompt("이메일: ");
    if (inputEmail.includes("@") === false) {
      console.log("올바른 이메일 형식이 아닙니다.");
      return;
    }

    const inputPassword = prompt("비밀번호: ");
    if (inputPassword.length < 4) {
      console.log("비밀번호는 최소 4자 이상입니다.");
      return;
    }

    const inputUsername = prompt("이름: ");
    if (inputUsername.length < 1) {
      console.log("이름은 최소 1글자 이상입니다.");
      return;
    }
    if (inputUsername.length > 5) {
      console.log("이름은 최대 5글자입니다.");
      return;
    }

    const isSignedUp = this.#authService.signUp(
      inputEmail,
      inputPassword,
      inputUsername,
    );

    if (isSignedUp === false) {
      console.log("이미 존재하는 계정이에요.\n");
      return;
    }

    console.log("회원가입에 성공했어요.\n");
  }

  showInvalidInputUI() {
    console.log("잘못된 입력입니다.\n");
  }
}
