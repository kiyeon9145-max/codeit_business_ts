import { Designer } from "./designer";

export class Developer {
  name: string;
  code: string;
  designer: Designer;

  constructor(name: string, designer: Designer) {
    this.name = name;
    this.code = "";
    this.designer = designer;
  }

  writeCode() {
    const design = this.designer.getDesign();
    this.code = `${design}을 ${this.name}가 코드로 바꿈`;
  }
}
