import { IMemoRepo } from "./ports/memo-repo.interface";
import { IUserRepo } from "./ports/user-repo.interface";

type MemoDataType = { email: string; title: string; content: string };

export class MemoService {
  private _userRepo: IUserRepo;
  private _memoRepo: IMemoRepo;

  constructor(userRepo: IUserRepo, memoRepo: IMemoRepo) {
    this._userRepo = userRepo;
    this._memoRepo = memoRepo;
  }

  async getMyMemos(credential: string): Promise<MemoDataType[]> {
    const email = credential.split("-")[0];
    const foundUser = await this._userRepo.findUserByEmail(email);

    if (foundUser === null) {
      return [];
    }
    if (foundUser.isCredentialValidate(credential) === false) {
      return [];
    }

    const memos = await this._memoRepo.loadMemos(email);
    return memos
      .filter((memo) => memo.email === email)
      .map((memo) => {
        return { email: memo.email, title: memo.title, content: memo.content };
      });
  }

  async createMemo(
    credential: string,
    title: string,
    content: string,
  ): Promise<boolean> {
    const email = credential.split("-")[0];
    const foundUser = await this._userRepo.findUserByEmail(email);

    if (foundUser === null) {
      return false;
    }
    if (foundUser.isCredentialValidate(credential) === false) {
      return false;
    }

    await this._memoRepo.createMemo(email, title, content);
    return true;
  }
}
