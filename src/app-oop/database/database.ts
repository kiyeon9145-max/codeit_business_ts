export type UserStrogeType = {
  email: string,
  password: string,
  username: string;
}
export type MemoStrogeType = {
  email: string,
  title: string,
  content: string;
}
type StorageType = {
  users: UserStrogeType [], 
  memos: MemoStrogeType []
}
const storage: StorageType = {
  users: [
    { email: "asd@asd.com", password: "1234", username: "nick" },
    { email: "qwe@qwe.com", password: "1234", username: "jack" },
  ],
  memos: [
    { email: "asd@asd.com", title: "오늘의 일기", content: "노잼이었다." },
    { email: "asd@asd.com", title: "오늘의 코딩", content: "어려웠다." },
    { email: "qwe@qwe.com", title: "오늘의 생각", content: "퇴각이다." },
  ],
};

const delay = (delayTime: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delayTime);
  });
};


export const database = {
  findOne: async (collection: "users" | "memos", email: string) => {
    await delay(1000);

    if (collection === "users") {
      return storage.users.find((user) => user.email === email) as UserStrogeType;
    } else if (collection === "memos") {
      return storage.memos.find((memo) => memo.email === email) as MemoStrogeType;
    }
  },
  insertOne: async (collection: "users" | "memos", data: any) => {
    await delay(1000);

    if (collection === "users") {
      return storage.users.push(data);
    } else if (collection === "memos") {
      return storage.memos.push(data);
    }
  },
};