import { database, MemoStrogeType } from "../../database/database";
import { Memo } from "../../domain/memo";
import { IMemoRepo } from "../../service/ports/memo-repo.interface";

export class MemoRepo implements IMemoRepo {
  async loadMemos(email: string): Promise<Memo[]> {
    const memos = await database.findMany<MemoStrogeType>("memos", email);
    return memos.map((memo) => new Memo(memo.email, memo.title, memo.content));
  }
  async createMemo(email: string, title: string, content: string) {
    await database.insertOne("memos", { email, title, content });
  }
}
