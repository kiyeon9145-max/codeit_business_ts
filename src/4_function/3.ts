/**
 * 클로저
 * js 함수는 스스로가 정의된 위치의 상위 스코프에 접근할 수 있습니다.
 * 즉, outer가 실행된 후 리턴된 inner 함수는 variable에 접근할 수 있습니다.
 */
const outer = () => {
  const outVariable = 1;

  return () => {
    return outVariable;
  };
};
const inner = outer();
const result = inner();
console.log(result);
