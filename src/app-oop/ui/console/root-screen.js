export class RootScreen {
  // 속성
  #authScreen;
  #memoScreen;

  // 메소드
  constructor(authScreen, memoScreen) {
    this.#authScreen = authScreen;
    this.#memoScreen = memoScreen;
  }

  run() {
    let me;

    while (true) {
      while (me === undefined) {
        const choice = this.#authScreen.showAuthUI();
        if (choice === "0") {
          me = this.#authScreen.showSignInUI();
        } else if (choice === "1") {
          this.#authScreen.showSignUpUI();
        } else if (choice === "q") {
          process.exit(0);
        } else {
          this.#authScreen.showInvalidInputUI();
        }
      }

      console.log();

      while (me !== undefined) {
        console.log(`[${me.username}님의 메모장]`);
        const choice = this.#memoScreen.showMenuUI();

        if (choice === "0") {
          this.#memoScreen.showAllMemosUI(me.credential);
        } else if (choice === "1") {
          this.#memoScreen.showCreateMemoUI(me.credential);
        } else if (choice === "2") {
          me = undefined;
          break;
        } else if (choice === "q") {
          process.exit(0);
        } else {
          console.log("잘못된 입력입니다.\n");
        }
      }
    }
  }
}
