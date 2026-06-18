import { AuthScreen } from "./auth-screen";
import { MemoScreen } from "./memo-screen";

export class RootScreen {
  // 속성
  private authScreen: AuthScreen;
  private memoScreen: MemoScreen;
  private screenIds: screenIds;

type ScreenId = "sign"

  constructor(authScreen: AuthScreen, memoScreen: MemoScreen) {
    this.authScreen = authScreen;
    this.memoScreen = memoScreen;
    this.screenIds = ["signin-view", "signup-view", "memo-view"];
  }

  run() {
    // 등록
    document.getElementById("goto-signup-btn").addEventListener("click", () => {
      this.showScreen("signup-view");
    });
    document.getElementById("goto-signin-btn").addEventListener("click", () => {
      this.showScreen("signin-view");
    });
    document.getElementById("signin-btn").addEventListener("click", () => {
      console.log("로그인 버튼을 눌렀다!!!");
      const me = this.#authScreen.signIn();
      if (me !== null) {
        alert("로그인 성공");
        
        this.memoScreen.setMe(me);
        this.showScreen("memo-view");
        this.memoScreen.showGrettingMessage();
      }
    });
    document.getElementById("signup-btn").addEventListener("click", () => {
      console.log("회원 가입 버튼을 눌렀다!!!");
      this.authScreen.signUp();
    });

    // 화면 오픈
    this.showScreen("signin-view");
  }

  showScreen(screenId: screenIds) {
    for (let i = 0; i < this.screenIds.length; i++) {
      if (this.screenIds[i] === screenId) {
        document.getElementById(this.screenIds[i]).classList.add("active");
      } else {
        document.getElementById(this.screenIds[i]).classList.remove("active");
      }
    }
  }
}