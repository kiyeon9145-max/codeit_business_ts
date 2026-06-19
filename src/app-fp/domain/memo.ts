export type Memo = {
  email: string;
  title: string;
  content: string;
};

export const createMemo = (
  email: string,
  title: string,
  content: string,
): Memo => {
  return { email, title, content };
};

export const isContentValidate = (memo: Memo): boolean => {
  return memo.content.includes("바보");
};
