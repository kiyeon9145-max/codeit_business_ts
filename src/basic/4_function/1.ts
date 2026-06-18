import { UserType } from "../2_ref_value";

// 함수
function addOne(x: number): number {
  return x + 1;
}
// 익명 함수
const addTwo = function (x: number): number {
  return x + 2;
};
// 익명 함수 중에서 화살표 함수
const addThree = (x: number): number => {
  return x + 3;
};
// 화살표 함수의 줄여쓰기
const addFour = (x: number): number => x + 4;

const add = (x: number, y: number): number => x + y;
add(1, 2);

console.log(addOne(1));
console.log(addTwo(1));
console.log(addThree(1));
console.log(addFour(1));

export function printProfile(user: UserType) {
  if (user.isMarried) {
    return `내 이름은 ${user.name}입니다. 나이는 ${user.age}살입니다. 기혼입니다.`;
  } else {
    return `내 이름은 ${user.name}입니다. 나이는 ${user.age}살입니다. 미혼입니다.`;
  }
}
