const makeFoodInCPU = (customerId) => {
  console.log(`${customerId}번째 손님의 요리를 만들기 시작합니다.`);
  const startTime = Date.now();
  while (true) {
    const currentTime = Date.now();
    if (currentTime - startTime >= 3000) {
      break;
    }
  }
};
const getFoodFromDatabse = (customerId) => {
  console.log(`${customerId}번째 손님의 요리를 사오기 시작합니다.`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${customerId}번째 손님의 요리를 구매해왔어요!`);
      resolve();
    }, 3000);
  });
};
const serveCustomer = async (customerId) => {
  console.log(`${customerId}번쨰 손님 입장했습니다!`);
  // makeFoodInCPU(customerId);
  await getFoodFromDatabse(customerId);
  console.log(`${customerId}번쨰 손님이 식사를 마치고 나갔습니다.`);
};
const openRestaurant = () => {
  for (let i = 1; i < 10; i++) {
    serveCustomer(i);
  }
};
openRestaurant();
