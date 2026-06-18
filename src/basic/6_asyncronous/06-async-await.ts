const buyIngredient = (ingredient: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ingredient);
    }, 3000);
  });
};

const makePasta = async () => {
  console.log("파스타를 만들기로 했다.");
  console.log("양파가 없다.");

  const ingredient1 = await buyIngredient("양파");
  console.log(`${ingredient1}를 구매해왔다.`);
  console.log(`${ingredient1}를 손질한다`);
  console.log("베이컨이 없다. 친구야 사다줘!");

  const ingredient2 = await buyIngredient("베이컨");
  console.log(`${ingredient2}을 구매해왔다.`);
  console.log(`${ingredient2}을 손질한다.`);
  console.log("토마토 소스가 없다. 친구야 사다줘!");

  const ingredient3 = await buyIngredient("토마토 소스");
  console.log(`${ingredient3}을 구매해왔다.`);
  console.log("파스타를 완성한다!");
};

makePasta();
