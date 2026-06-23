export type UserStrogeType = {
  email: string;
  password: string;
  username: string;
};
export type MemoStrogeType = {
  email: string;
  title: string;
  content: string;
};
type StorageType = {
  users: UserStrogeType[];
  memos: MemoStrogeType[];
};

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
  findOne: async <T>(
    collection: "users" | "memos",
    email: string,
  ): Promise<T | undefined> => {
    if (email === "t@t.com") {
      await delay(5000); // 비정상
      const err = new Error("Timeout akasihdb asdb ashdb ahbdsia baisdb");
      throw err;
    } else {
      await delay(1000); // 정상
    }

    if (collection === "users") {
      const found = storage.users.find((user) => user.email === email);
      return found !== undefined ? (found as T) : undefined;
    } else if (collection === "memos") {
      const found = storage.memos.find((memo) => memo.email === email);
      return found !== undefined ? (found as T) : undefined;
    }
  },
  findMany: async <T>(
    collection: "users" | "memos",
    email: string,
  ): Promise<T[]> => {
    await delay(5000);

    if (collection === "users") {
      const users = storage.users.filter((user) => user.email === email);
      return users as T[];
    } else if (collection === "memos") {
      const memos = storage.memos.filter((memo) => memo.email === email);
      return memos as T[];
    }

    return [];
  },
  insertOne: async (collection: "users" | "memos", data: any) => {
    await delay(5000);

    if (collection === "users") {
      storage.users.push(data);
    } else if (collection === "memos") {
      storage.memos.push(data);
    }
  },
};