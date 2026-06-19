import { UserDataType } from "../../service/auth-service";
import { MemoDataType } from "../../service/memo-service";
import { AuthScreenType } from "./auth-screen";
import { MemoScreenType } from "./memo-screen";

export type StateType = {
  user: UserDataType | undefined;
  memos: MemoDataType[];
};

export const rootScreen = (
  authScreen: AuthScreenType,
  memoScreen: MemoScreenType,
) => {
  const { showAuthUI, showInvalidInputUI, showSignInUI, showSignUpUI } =
    authScreen;
  const { showAllMemosUI, showCreateMemoUI, showMenuUI } = memoScreen;

  const main = (state: StateType) => {
    if (state.user === undefined) {
      const newState = runAuth(state);
      return main(newState);
    } else {
      const newState = runMemo(state);
      return main(newState);
    }
  };

  const runAuth = (state: StateType): StateType => {
    const choice = showAuthUI();
    if (choice === "0") {
      const me = showSignInUI();
      return { ...state, user: me };
    } else if (choice === "1") {
      showSignUpUI();
      return state;
    } else if (choice === "q") {
      process.exit(0);
    } else {
      showInvalidInputUI();
      return state;
    }
  };

  const runMemo = (state: StateType): StateType => {
    const { user, memos } = state;
    if (user === undefined) {
      return state;
    }

    console.log(`[${user.username}님의 메모장]`);
    const choice = showMenuUI();
    if (choice === "0") {
      showAllMemosUI(user.credential);
      return state;
    } else if (choice === "1") {
      showCreateMemoUI(user.credential);
      return state;
    } else if (choice === "2") {
      return { ...state, user: undefined };
    } else if (choice === "q") {
      process.exit(0);
    } else {
      console.log("잘못된 입력입니다.\n");
      return state;
    }
  };

  return { main };
};

export type RootScreenType = ReturnType<typeof rootScreen>;