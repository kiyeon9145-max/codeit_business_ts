import { database } from "../../database/database";
import { Memo } from "../../domain/memo";

export class MemoRepo {
  loadMemos(): Memo[] {
    return database.memos.map(
      (memo) => new Memo(memo.email, memo.title, memo.content),
    );
  }
  createMemo(email: string, title: string, content: string) {
    database.memos.push({ email, title, content });
  }
}
