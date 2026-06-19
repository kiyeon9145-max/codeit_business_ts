export type Memo = {
  email: string;
  title: string;
  content: string;
};

// 순수함수 + 불변성
export const memoDomain = () => {
  const createMemo = (email: string, title: string, content: string): Memo => {
    return { email, title, content };
  };

  const isContentValidate = (memo: Memo): boolean => {
    return memo.content.includes("바보");
  };

  return { createMemo, isContentValidate };
};

export type MemoDomainType = ReturnType<typeof memoDomain>;
