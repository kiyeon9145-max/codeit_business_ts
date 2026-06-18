import { users } from "./2_ref_value.js";
import { printProfile } from "./4_function.js";

// 반복문

// 시작
// while (이 조건이 참이라면) {
//     실행하고 다시 반복한다
// }
// 끝

// 방법1: 0부터 9까지 출력
console.log("시작");
let i = 0;
while (i < 10) {
  console.log(i);
  i = i + 1;
}
console.log("끝");

// 방법2: 0부터 9까지 출력
console.log("시작");
let j = 0;
while (true) {
  console.log(j);
  j = j + 1;
  if (j == 10) {
    break;
  }
}
console.log("끝");

// 방법3
console.log("시작");
for (let k = 0; k < 10; k = k + 1) {
  console.log(k);
}
console.log("끝");

// 0부터 9까지 5를 제외하고 출력
console.log("시작");
for (let k = 0; k < 10; k = k + 1) {
  if (k !== 5) {
    console.log(k);
  }
}
console.log("끝");

console.log("시작");
for (let k = 0; k < 10; k = k + 1) {
  if (k === 5) {
    continue;
  }
  console.log(k);
}
console.log("끝");

// 실전
for (let k = 0; k < users.length; k = k + 1) {
  console.log(printProfile(users[k]));
}
