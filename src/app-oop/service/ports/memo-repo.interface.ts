import { Memo } from "../../domain/memo";

export interface IMemoRepo {
  loadMemos(email: string): Promise<Memo[]>;
  createMemo(email: string, title: string, content: string): void;
}
