import { Memo } from "../domain/memo";

export interface IMemoRepo {
  loadMemos(): Memo[];
  createMemo(email: string, title: string, content: string): void;
}
