import { MemoServiceType } from "../../service/memo-service";
import { prompt } from "../../util";

export const memoScreen = (memoService: MemoServiceType) => {
  const { getMyMemos, createMemo } = memoService;
  const showMenuUI = (): string => {
    return prompt("메모 불러오기(0), 메모 작성하기(1), 로그아웃(2), 종료(q): ");
  };

  const showAllMemosUI = (credential: string) => {
    const memos = getMyMemos(credential);
    for (let i = 0; i < memos.length; i = i + 1) {
      console.log(`제목: ${memos[i].title}`);
      console.log(`내용: ${memos[i].content}\n`);
    }
  };

  const showCreateMemoUI = (credential: string) => {
    const title = prompt("제목: ");
    const content = prompt("내용: ");

    const isCreated = createMemo(credential, title, content);

    if (isCreated === true) {
      console.log("메모가 생성되었습니다.\n");
    } else {
      console.log("오류가 발생했어요.\n");
    }
  };
  return { showMenuUI, showAllMemosUI, showCreateMemoUI };
};
export type MemoScreenType = ReturnType<typeof memoScreen>;
