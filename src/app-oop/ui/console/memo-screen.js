import { prompt } from "../../util.js";

export class MemoScreen {
  // 인스턴스 속성(변수)
  #memoService;

  // 메소드(함수)
  constructor(memoService) {
    this.#memoService = memoService;
  }

  showMenuUI() {
    return prompt("메모 불러오기(0), 메모 작성하기(1), 로그아웃(2), 종료(q): ");
  }

  showAllMemosUI(credential) {
    const memos = this.#memoService.getMyMemos(credential);
    for (let i = 0; i < memos.length; i = i + 1) {
      console.log(`제목: ${memos[i].title}`);
      console.log(`내용: ${memos[i].content}\n`);
    }
  }

  showCreateMemoUI(credential) {
    const title = prompt("제목: ");
    const content = prompt("내용: ");

    const isCreated = this.#memoService.createMemo(credential, title, content);

    if (isCreated === true) {
      console.log("메모가 생성되었습니다.\n");
    } else {
      console.log("오류가 발생했어요.\n");
    }
  }
}
