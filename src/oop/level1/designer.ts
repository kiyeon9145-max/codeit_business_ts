export class Designer {
  name: string;
  figma: string;

  constructor(name: string) {
    this.name = name;
    this.figma = "";
  }

  doDesign() {
    this.figma = `${this.name}님의 멋진 디자인`;
  }

  getDesign() {
    return this.figma;
  }
}
