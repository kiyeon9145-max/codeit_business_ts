/**
 * JS 엔진(V8)의 메인 스레드는
 * 논블로킹 상태에서
 *   (제어권을 libuv의 백그라운드 스레드, 또는 os에게 넘겼는데)
 *   (즈기 제어권을 다시 반환받은 메인 스레드의 상태)
 * 비동기적 매커니즘으로 작동할 수 있습니다.
 *   (libuv의 백그라운드 스레드, 또는 os의 작업 완료 유무를 통지받는 것과 무관하게)
 *   (메인 스레드가 자신의 코드를 독립적으로 실행할 수 있는 매커니즘)
 * 이러한 작업을 비동기 작업(함수)이라고 부릅니다.
 */

const job1 = () => {
  console.log("유저1 파스타 주문이요!");
  console.log("유저1 파스타 면 심부름 시켜야겠다!");
  setTimeout(() => {
    console.log("유저1 파스타 왔다. 조리 시작!");
    console.log("유저1 파스타 여기있습니다. 맛있게 드세요");
  }, 5000);
};
// job1();

// 콜백 헬
const makePasta = () => {
  console.log("파스타를 만들기로 했다.");
  console.log("양파가 없다.");

  setTimeout(() => {
    console.log("양파를 구매해왔다."); // 대기, 양파, 에러
    console.log("양파를 손질한다");
    console.log("베이컨이 없다.");

    setTimeout(() => {
      console.log("베이컨을 구매해왔다."); // 대기, 베이컨, 에러
      console.log("베이컨을 굽는다.");
      console.log("토마토 소스가 없다.");

      setTimeout(() => {
        console.log("토마토 소스를 구매해왔다."); // 대기, 토마토 소스, 에러
        console.log("파스타를 완성한다!");
      }, 3000);
    }, 3000);
  }, 3000);
};

makePasta();
