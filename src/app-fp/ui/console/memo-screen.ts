import { MemoServiceType } from "../../service/memo-service";
import { prompt } from "../../util";
import { StateType } from "./root-screen";

export const memoScreen = (memoService: MemoServiceType) => {
  const { getMyMemos, createMemo } = memoService;

  const showMenuUI = (): string => {
    return prompt("메모 불러오기(0), 메모 작성하기(1), 로그아웃(2), 종료(q): ");
  };

  const getAllMemos = (credential: string) => {
    const memos = getMyMemos(credential);
    return memos;
  };

  const createMemoForm = (credential: string) => {
    const title = prompt("제목: ");
    const content = prompt("내용: ");

    const isCreated = createMemo(credential, title, content);

    if (isCreated === true) {
      console.log("메모가 생성되었습니다.\n");
    } else {
      console.log("오류가 발생했어요.\n");
    }
  };

  const render = (state: StateType) => {
    const { user, memos } = state;
    console.log(`${user?.username}님의 메모장\n`);
    memos.forEach((memo) => {
      console.log(`제목: ${memo.title}`);
      console.log(`내용: ${memo.content}\n`);
    });
  };

  return {
    showMenuUI,
    getAllMemos,
    createMemoForm,
    render,
  };
};

export type MemoScreenType = ReturnType<typeof memoScreen>;