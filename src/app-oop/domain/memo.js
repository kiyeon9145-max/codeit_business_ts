export class Memo {
  // 속성
  #email;
  #title;
  #content;

  // 메소드
  constructor(email, title, content) {
    this.#email = email;
    this.#title = title;
    this.#content = content;
  }

  getTitle() {
    return this.#title;
  }

  getContent() {
    return this.#content;
  }

  getEmail() {
    return this.#email;
  }
}
