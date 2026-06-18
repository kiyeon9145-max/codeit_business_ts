export class MemoService {
  // 속성
  #memoRepo;
  #userRepo;

  // 메소드
  constructor(userRepo, memoRepo) {
    this.#userRepo = userRepo;
    this.#memoRepo = memoRepo;
  }

  getMyMemos(credential) {
    const email = credential.split("-")[0];
    const foundUser = this.#userRepo.findUserByEmail(email);
    if (foundUser.isCredentialValidate(credential) === false) {
      return [];
    }

    const myMemos = [];
    const memos = this.#memoRepo.loadMemos();

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

  createMemo(credential, title, content) {
    const email = credential.split("-")[0];
    const foundUser = this.#userRepo.findUserByEmail(email);
    if (foundUser.isCredentialValidate(credential) === false) {
      return false;
    }

    this.#memoRepo.createMemo(email, title, content);
    return true;
  }
}
