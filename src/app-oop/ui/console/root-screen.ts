import { UserDataType } from "../../service/auth-service";
import { AuthScreen } from "./auth-screen";
import { MemoScreen } from "./memo-screen";

export class RootScreen {
  // 속성
  private _authScreen: AuthScreen;
  private _memoScreen: MemoScreen;

  // 메소드
  constructor(authScreen: AuthScreen, memoScreen: MemoScreen) {
    this._authScreen = authScreen;
    this._memoScreen = memoScreen;
  }

  async run() {
    let me: UserDataType | undefined;

    while (true) {
      while (me === undefined) {
        const choice = this._authScreen.showAuthUI();
        if (choice === "0") {
          me = await this._authScreen.showSignInUI();
        } else if (choice === "1") {
          this._authScreen.showSignUpUI();
        } else if (choice === "q") {
          process.exit(0);
        } else {
          this._authScreen.showInvalidInputUI();
        }
      }

      console.log();

      while (me !== undefined) {
        console.log(`[${me.username}님의 메모장]`);
        const choice = this._memoScreen.showMenuUI();

        if (choice === "0") {
          await this._memoScreen.showAllMemosUI(me.credential);
        } else if (choice === "1") {
          await this._memoScreen.showCreateMemoUI(me.credential);
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
