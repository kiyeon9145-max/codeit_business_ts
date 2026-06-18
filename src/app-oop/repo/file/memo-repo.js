import fs from "node:fs";
import { Memo } from "../../domain/memo.js";

export class MemoRepo {
  filePath;

  constructor() {
    this.filePath =
      "/Users/apple/Desktop/codeit-cursur/src/app-oop/database/memos.txt";
  }

  readFile() {
    const result = fs.readFileSync(this.filePath);
    return String(result).trim().split("\n");
  }

  loadMemos() {
    const result = this.readFile();
    const memos = [];
    for (let i = 0; i < result.length; i = i + 1) {
      const memo = new Memo(
        result[i].split(", ")[0],
        result[i].split(", ")[1],
        result[i].split(", ")[2],
      );
      memos.push(memo);
    }
    return memos;
  }
  createMemo(email, title, content) {
    fs.appendFileSync(this.filePath, `${email}, ${title}, ${content}\n`);
  }
}
