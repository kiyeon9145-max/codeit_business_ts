/**
 * 프로미스의 then 함수
 *
 * then 함수가 실행되면, then 함수의 매개변수로 주입되는 콜백 함수를 콜백 큐에 등록합니다.
 * - 프로미스 컨테이너 내부의 값이 결정이 즉시 된다면 js 엔진에 의해서 콜백 큐에 즉시 등록됩니다.
 * - 프로미스 컨테이너 내부의 값이 결정이 안되어 있다면, 결정되기를 기다렸다가, js 엔진에 의해서 콜백 큐에 등록됩니다.
 * 이벤트 루프에 의해서 콜백 큐에 등록된 콜백 함수가 콜 스택에서 실행됩니다.
 */
const p1 = new Promise((resolve, reject) => {
  resolve(1);
});
console.log(p1);
p1.then((v) => {
  console.log(v);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});
console.log(p2);
p2.then((v) => {
  console.log(v);
});
