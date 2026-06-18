// 문제1
// 반복문을 이용해서 0부터 9까지의 숫자중에서 짝수만 출력하세요.
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i = i + 2;
// }

let i = 0;
while (i < 10) {
  if (i % 2 === 0) console.log(i);
  i = i + 1;
}

// 문제2
// break를 사용해서
// 0부터 9까지의 숫자중에서 홀수만 출력하세요.

let j = 1;
while (true) {
  console.log(j);
  if (j === 9) {
    break;
  }
  j = j + 2;
}

// 문제3
// 0부터 9까지의 짝수를 for 반복문으로 출력하세요.
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 문제4
// 0부터 9까지 모든 숫자를 더한 값을 출력하세요.
let sum = 0;
for (let i = 0; i < 10; i = i + 1) {
  sum = sum + i;
}
console.log(sum);

// 문제 5
// 0부터 9까지의 모든 숫자중에서 홀수의 합을 출력하세요.
let k = 0;
for (let i = 1; i < 10; i = i + 2) {
  k = k + i;
  console.log(`i=${i}, k=${k}`);
}

// 문제7
// 0부터 9까지의 모든 숫자중에서 3의 배수를 제외한 모든 수의 합을 출력하세요.
let sum2 = 0;
for (let i = 0; i < 10; i++) {
  if (i % 3 !== 0) {
    sum2 = sum2 + i;
  }
  console.log(sum2);
}
