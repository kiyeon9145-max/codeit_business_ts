import { Memo } from "../../domain/memo";

export interface IMemoRepo {
  loadMemos(): Memo[];
  saveMemo(email: string, title: string, content: string): void;
}
