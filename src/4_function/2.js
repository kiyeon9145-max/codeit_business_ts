// 고차함수
// : 함수의 매개변수로 다른 함수를 받는 함수
// : 또 다른 함수를 리턴하는 함수

const numbers = [1, 2, 3, 4, 5];

const forEach = (callback, arr) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};
forEach((v) => {
  console.log(v);
}, numbers);
numbers.forEach((v) => {
  console.log(v);
});

const map = (callback, arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
};
console.log(map((v) => 2 * v, numbers));
console.log(numbers.map((v) => v * 2));

const filter = (callback, arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(filter((v) => (v % 2 === 0 ? true : false), numbers));
console.log(numbers.filter((v) => (v % 2 === 0 ? true : false)));

const find = (callback, arr) => {
  // 콜백에 의해서 true가 리턴되는 원소중에서 첫 번쨰 원소를 찾아서 리턴
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) {
      return arr[i];
    }
  }
};
console.log(find((v) => (v % 5 === 3 ? true : false), numbers));
console.log(numbers.find((v) => (v % 5 === 3 ? true : false)));

const findIndex = (callback, arr) => {
  // 콜백에 의해서 true가 리턴되는 원소중에서 첫 번쨰 원소를 찾아서 그 인덱스를 리턴
  // 못찾으면 -1을 리턴합니다.
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) {
      return i;
    }
  }

  return -1;
};
console.log(findIndex((v) => (v % 5 === 3 ? true : false), numbers));
console.log(numbers.findIndex((v) => (v % 5 === 3 ? true : false)));

const reduce = (callback, accumulator, arr) => {
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }
  return accumulator;
};

console.log(reduce((accumulator, v) => accumulator * v, 1, numbers));
console.log(numbers.reduce((acc, v) => acc * v, 1));