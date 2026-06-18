// 원시 값(Primitive Value)

/**
 * 변수: 값에 이름을 붙인 것
 *
 * const username = "김민정"
 * const: 값을 변경할 수 없으며 정의할 때 값을 반드시 선언해야 합니다.
 *
 * let username = "김민정"
 * let: 값을 변경할 수 있으며, 정의할 때 값을 선언하지 않아도 됩니다.
 *
 * 항상 const를 사용해서 변수를 선언하고, 꼭 필요한 경우에만 let을 사용합니다.
 */
// 변수: 값에 이름을 붙인 것
const name1: string = "김민정"; // "김민정", '김민정' `김민정`
const age1: number = 19; // 숫자 = number
const isMarried1: boolean = false; // 참거짓 = boolean

const name2: string = "박진웅";
const age2: number = 30;
const isMarried2: boolean = true;

/**
 * 타입: 값의 형식
 *
 * 1. 문자열(string): "", '', `${변수}`
 * 2. 숫자(number): 숫자, NaN, Infinity, -Infinity
 * 3. 참, 거짓(boolean): true, false
 * 4. 값을 정의하지 않음: undefined
 * 5. 값이 없음: null
 * 6. 큰 정수(bigint)
 * 7. symbol
 */

/**
 * 타입 변환
 *
 * 문자열로 변환
 *   String(값)
 * 숫자로 변환
 *   Number(값) >> 숫자로 변환, 실패하면 NaN을 반환
 * 참 또는 거짓으로 변환
 *   Boolean(값)
 *   변환해서 false가 되는 값: 0, "", null, undefined, NaN
 *   변환해서 true가 되는 값: 위의 5개를 제외한 전부
 */
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
