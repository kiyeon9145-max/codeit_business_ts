import { UserDataType } from "../../service/auth-service";
import { AuthScreenType } from "./auth-screen";
import { MemoScreenType } from "./memo-screen";

export const rootScreen = (
  authScreen: AuthScreenType,
  memoScreen: MemoScreenType,
) => {
  const { showAuthUI, showSignInUI, showSignUpUI, showInvalidInputUI } =
    authScreen;
  const { showMenuUI, showAllMemosUI, showCreateMemoUI } = memoScreen;
  const run = () => {
    let me: UserDataType | undefined;

    while (true) {
      while (me === undefined) {
        const choice = showAuthUI();
        if (choice === "0") {
          me = showSignInUI();
        } else if (choice === "1") {
          showSignUpUI();
        } else if (choice === "q") {
          process.exit(0);
        } else {
          showInvalidInputUI();
        }
      }

      console.log();

      while (me !== undefined) {
        console.log(`[${me.username}님의 메모장]`);
        const choice = showMenuUI();

        if (choice === "0") {
          showAllMemosUI(me.credential);
        } else if (choice === "1") {
          showCreateMemoUI(me.credential);
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
  };
};

export type RootScreenType = ReturnType<typeof rootScreen>;
