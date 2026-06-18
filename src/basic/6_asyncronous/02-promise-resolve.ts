// 값
const x: number = 1;
console.log(x);

// 프로미스는 값을 담은 컨테이너입니다.
// 대기중, 완료, 에러 3가지 상태를 가질 수 있습니다.
// 프로미스 컨테이너 내부의 값을 지금 즉시 1로 결정해봅시다.
const p1: Promise<number> = new Promise((resolve, reject) => {
  resolve(1);
});
console.log(p1);

// 프로미스는 미래에 결정될 예정인 값을 담은 컨테이너입니다.
// 대기중, 완료, 에러 3가지 상태를 가질 수 있습니다.
// 프로미스 컨테이너 내부의 값을 1초 뒤에 10로 결정해봅시다.
const p2: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("10으로 지금 결정!");
    resolve(10);
  }, 1000);
});
console.log(p2);
setTimeout(() => {
  console.log(p2);
}, 3000);
