import { database } from "../database/database";
import { createMemo, Memo } from "../domain/memo";

export const loadMemos = (): Memo[] => {
  return database.memos.map((memo) =>
    createMemo(memo.email, memo.content, memo.title),
  );
};

export const saveMemo = (email: string, title: string, content: string) => {
  database.memos.push({ email, title, content });
};
