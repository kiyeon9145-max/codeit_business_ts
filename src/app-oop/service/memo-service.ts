import { MemoRepo } from "../repo/file/memo-repo";
import { UserRepo } from "../repo/file/user-repo";

export class MemoService {
  // 속성
  private memoRepo: MemoRepo;
  private userRepo: UserRepo;

  // 메소드
  constructor(userRepo: UserRepo, memoRepo: MemoRepo) {
    this.userRepo = userRepo;
    this.memoRepo = memoRepo;
  }

  getMyMemos(credential: any) {
    const email = credential.split("-")[0];
    const foundUser = this.userRepo.findUserByEmail(email);
    if (foundUser.isCredentialValidate(credential) === false) {
      return [];
    }

    const myMemos = [];
    const memos = this.memoRepo.loadMemos();

    for (let i = 0; i < memos.length; i = i + 1) {
      if (memos[i].getEmail() === email) {
        myMemos.push({
          email: memos[i].getEmail(),
          title: memos[i].getTitle(),
          content: memos[i].getContent(),
        });
      }
    }

    return myMemos;
  }

  createMemo(credential: any, title: string, content: string) {
    const email = credential.split("-")[0];
    const foundUser = this.userRepo.findUserByEmail(email);
    if (foundUser.isCredentialValidate(credential) === false) {
      return false;
    }

    this.memoRepo.createMemo(email, title, content);
    return true;
  }
}
