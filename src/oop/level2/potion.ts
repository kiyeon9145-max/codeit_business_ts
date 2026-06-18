export class Potion {
  private healingAmount: number;

  constructor(healingAmount: number) {
    this.healingAmount = healingAmount;
  }

  getHealingAmount() {
    return this.healingAmount;
  }
}
