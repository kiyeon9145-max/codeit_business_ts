import { Potion } from "./potion";
import { Warrior } from "./warrior";

// 객체 지향 프로그래밍: 업무 분산 및 협업 전략
export class Game {
  run() {
    // 객체
    const warrior1: Warrior = new Warrior("김철수", 10, 20, 5);
    const warrior2: Warrior = new Warrior("김민수", 10, 5, 4);

    console.log(warrior1.getStatus());
    console.log(warrior2.getStatus());

    warrior1.attackPlayer(warrior2);
    console.log(warrior2.getStatus());

    const potion1: Potion = new Potion(2);
    const potion2: Potion = new Potion(2);
    const potion3: Potion = new Potion(2);
    const potion4: Potion = new Potion(2);
    const potion5: Potion = new Potion(2);

    // 전사가 포션 5개를 집어요
    // 인벤토리에 포션이 3개만 들어가요.
    // 4, 5개가 되면 용량이 꽉 찼습니다라고 메세지가 나옵니다.
    warrior2.pickPotionUp(potion1);
    warrior2.pickPotionUp(potion2);
    warrior2.pickPotionUp(potion3);
    warrior2.pickPotionUp(potion4);
    warrior2.pickPotionUp(potion5);

    // 1개를 섭취하면 체력이 2 오릅니다.
    // 다시 포션을 다시 하나 더 집을 수 있습니다
    warrior2.usePotion();
    console.log(warrior2.getStatus());
    warrior2.pickPotionUp(potion4);

    warrior2.usePotion();
    console.log(warrior2.getStatus());
    warrior2.pickPotionUp(potion5);

    warrior2.usePotion();
    warrior2.usePotion();
    warrior2.usePotion();
    warrior2.usePotion();
    warrior2.usePotion();
    warrior2.usePotion();
    warrior2.usePotion();
    warrior2.usePotion();
    warrior2.usePotion();

    console.log(warrior2.getStatus());
    warrior2.showInventory();
  }
}
