// 참조 값(Reference Value)

/**
 * 객체(Object): 복합적인 형식의 데이터를 키와 값 구조로 담을 수 있는 컨테이너
 * 키를 통한 값 조회: user1.name, user1["name"]
 * 키 목록 조회: Object.keys(user1)
 * 값 목록 조회: Object.values(user1)
 * 키와 값 목록 동시 조회: Object.entries(user1)
 */
export type UserType = {
  name: string;
  age: number;
  isMarried: boolean;
};

const user1: UserType = {
  name: "김민정",
  age: 19,
  isMarried: false,
};
const user2: UserType = {
  name: "박진웅",
  age: 30,
  isMarried: true,
};
console.log(user1.name);
console.log(user1["name"]);
console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log(Object.entries(user1));

/**
 * 배열(Array): 같은 종류의 여러개의 데이터를 담아서 사용하는 컨테이너
 * 배열 길이: users.length
 * 요소 조회: users[0] (인덱스)
 * 요소 추가: users.push(user1), users.unshift(user1)
 * 요소 삭제: users.pop(), users.shift(), users.splice(인덱스, 제거하고 싶은 개수)
 */
export let users: UserType[] = [];
console.log(users);
users.push(user1);
console.log(users);
console.log(users.length);
console.log(users[0]);

// 객체: 펼치기
console.log(users[0]);
users[0] = {
  ...users[0],
};
console.log(users[0]);

// 객체: 구조 분해
const { name, age, isMarried } = users[0];
console.log(name);
console.log(age);
console.log(isMarried);

// 배열: 펼치기
console.log(users);
users = [...users];
console.log(users);
