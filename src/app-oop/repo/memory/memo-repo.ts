import { database } from "../../database/database.js";
import { Memo } from "../../domain/memo.js";

export class MemoRepo {
  loadMemos() {
    const memos = [];
    for (let i = 0; i < database.memos.length; i = i + 1) {
      const memo = new Memo(
        database.memos[i].email,
        database.memos[i].title,
        database.memos[i].content,
      );
      memos.push(memo);
    }
    return memos;
    // map 함수를 사용해서 가독성이 좋게 고쳐보자.
  }
  createMemo(email: string, title: string, content: string) {
    database.memos.push({ email: email, title: title, content: content });
  }
}
