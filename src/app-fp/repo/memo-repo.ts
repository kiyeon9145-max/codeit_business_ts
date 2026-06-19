import { database } from "../database/database";
import { Memo, memoDomain } from "../domain/memo";
import { IMemoRepo } from "../service/ports/memo-repo.interface";

// 비순수함수 + 불변성
export const memoRepo = (): IMemoRepo => {
  const { createMemo } = memoDomain;

  const loadMemos = (): Memo[] => {
    return database.memos.map((memo) =>
      createMemo(memo.email, memo.content, memo.title),
    );
  };

  const saveMemo = (email: string, title: string, content: string) => {
    database.memos.push({ email, title, content });
  };

  return { loadMemos, saveMemo };
};

export type memoRepoType = ReturnType<typeof memoRepo>;
