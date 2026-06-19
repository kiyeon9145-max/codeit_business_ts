import { userDomain } from "../domain/user";
import { parseCredential } from "../util";
import { IMemoRepo } from "./ports/memo-repo.interface";
import { IUserRepo } from "./ports/user-repo.interface";

type MemoDataType = { email: string; title: string; content: string };

export const memoService = (userRepo: IUserRepo, memoRepo: IMemoRepo) => {
  const { isCredentialValidate } = userDomain;
  const { findUserByEmail } = userRepo;
  const { loadMemos, saveMemo } = memoRepo;

  const getMyMemos = (credential: string): MemoDataType[] => {
    const { email } = parseCredential(credential);
    const foundUser = findUserByEmail(email);

    if (foundUser === null) {
      return [];
    }
    if (isCredentialValidate(foundUser, credential) === false) {
      return [];
    }

    const memos = loadMemos();
    return memos
      .filter((memo) => memo.email === email)
      .map((memo) => {
        return { email: memo.email, title: memo.title, content: memo.content };
      });
  };
  const createMemo = (credential: string, title: string, content: string) => {
    const { email } = parseCredential(credential);
    const foundUser = findUserByEmail(email);

    if (foundUser === null) {
      return false;
    }
    if (isCredentialValidate(foundUser, credential) === false) {
      return false;
    }

    saveMemo(email, title, content);
    return true;
  };

  return { getMyMemos, createMemo };
};

export type MemoServiceType = ReturnType<typeof memoService>;
