export class Memo {
  // 속성
  private email: string;
  private title: string;
  private content: string;

  // 메소드
  constructor(email: string, title: string, content: string) {
    this.email = email;
    this.title = title;
    this.content = content;
  }

  getTitle() {
    return this.title;
  }

  getContent() {
    return this.content;
  }

  getEmail() {
    return this.email;
  }
}
