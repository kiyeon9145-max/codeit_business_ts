import { Potion } from "./potion";

// 클래스: 객체를 만들기 위해 정의한 틀
export class Warrior {
  // 인스턴스 속성(변수)(상태)
  private name: string;
  private health: number;
  private attack: number;
  private defense: number;
  private inventory: any;

  // 메소드(함수)(행동)
  // 생성자: 객체를 생성할 때 자동으로 실행되는 메소드
  constructor(name: string, health: number, attack: number, defense: number) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.inventory = {
      potion: [],
    };
  }

  getName(): string {
    return this.name;
  }

  getHealth(): string {
    return this.name;
  }

  getAttack(): number {
    return this.attack;
  }

  getDefense(): number {
    return this.defense;
  }

  getStatus(): string {
    return `이름: ${this.name}\n체력: ${this.health}\n공격력: ${this.attack}\n방어력: ${this.defense}\n`;
  }

  showInventory() {
    console.log(`남은 포션: ${this.inventory.potion.length}개`);
  }

  attackPlayer(other: Warrior) {
    const damage = this.attack - other.getDefense();
    other.adaptDamage(damage);
  }

  adaptDamage(damage: number) {
    if (this.health < damage) {
      this.health = 0;
    } else {
      this.health = this.health - damage;
    }
  }

  // 포션 확보 메소드
  pickPotionUp(potion: Potion) {
    if (this.inventory.potion.length >= 3) {
      console.log("인벤토리가 꽉 찼습니다.");
    } else {
      console.log("포션을 추가합니다.");
      this.inventory.potion.push(potion);
    }
  }

  // 포션 사용 메소드
  usePotion() {
    if (this.inventory.potion.length <= 0) {
      console.log("남은 포션이 없습니다.");
    } else {
      const potion = this.inventory.potion.pop();
      this.health = this.health + potion.getHealingAmount();
      console.log("포션을 사용해서 체력이 회복되었습니다.");
    }
  }
}
