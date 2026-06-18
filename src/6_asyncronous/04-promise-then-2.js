/**
 * 프로미스의 then 함수
 */
// const p1 = new Promise((resolve, reject) => {
//     resolve(1);
// });
// console.log(p1);

// p1
// .then((v) => {console.log(v); return 2})
// .then((v) => {console.log(v); return 3})
// .catch((err) => {console.log(err)});

const p2 = new Promise((resolve, reject) => {
  console.log("시작");
  setTimeout(() => {
    resolve(1);
  }, 3000);
});
p2.then((v) => {
  console.log(v);
  // 그냥 2를 리턴
  return 2;
})
  .then((v) => {
    console.log(v);
    // 1초 뒤에 3이 될 상자를 리턴
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(3);
      }, 1000);
    });
  })
  .then((v) => {
    console.log(v);
  });
