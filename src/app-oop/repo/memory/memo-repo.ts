import { database } from "../../database/database";
import { Memo } from "../../domain/memo";
import { IMemoRepo } from "../../service/memo-repo.interface";

export class MemoRepo implements IMemoRepo {
  loadMemos(): Memo[] {
    return database.memos.map(
      (memo) => new Memo(memo.email, memo.title, memo.content),
    );
  }
  createMemo(email: string, title: string, content: string) {
    database.memos.push({ email, title, content });
  }
}
