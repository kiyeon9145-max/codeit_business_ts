export class Memo {
  // 속성
  private _email: string;
  private _title: string;
  private _content: string;

  // 메소드
  constructor(email: string, title: string, content: string) {
    this._email = email;
    this._title = title;
    this._content = content;
  }

  get Title() {
    return this._title;
  }

  get Content() {
    return this._content;
  }

  get Email() {
    return this._email;
  }

  isContentValidate(): boolean {
    // "바보"라는 단어가 내용에 들어가면 false를 리턴하는 함수
    return this._content.includes("바보");
  }
}
