import { MemoRepo } from "../repo/file/memo-repo";
import { UserRepo } from "../repo/file/user-repo";

type MemoDataType = { email: string; title: string; content: string };

export class MemoService {
  private _userRepo: UserRepo;
  private _memoRepo: MemoRepo;

  constructor(userRepo: UserRepo, memoRepo: MemoRepo) {
    this._userRepo = userRepo;
    this._memoRepo = memoRepo;
  }

  getMyMemos(credential: string): MemoDataType[] {
    const email = credential.split("-")[0];
    const foundUser = this._userRepo.findUserByEmail(email);

    if (foundUser === null) {
      return [];
    }
    if (foundUser.isCredentialValidate(credential) === false) {
      return [];
    }

    const memos = this._memoRepo.loadMemos();
    return memos
      .filter((memo) => memo.email === email)
      .map((memo) => {
        return { email: memo.email, title: memo.title, content: memo.content };
      });
  }

  createMemo(credential: string, title: string, content: string): boolean {
    const email = credential.split("-")[0];
    const foundUser = this._userRepo.findUserByEmail(email);

    if (foundUser === null) {
      return false;
    }
    if (foundUser.isCredentialValidate(credential) === false) {
      return false;
    }

    this._memoRepo.createMemo(email, title, content);
    return true;
  }
}
