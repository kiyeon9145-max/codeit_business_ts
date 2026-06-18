import { Designer } from "./designer";
import { Developer } from "./developer";

export class Company {
  developers: Developer[];
  designers: Designer[];

  constructor() {
    this.designers = [];
    this.developers = [];
  }

  hire() {
    const designer1 = new Designer("박하연");
    const designer2 = new Designer("김만만");
    this.designers.push(designer1);
    this.designers.push(designer2);

    const develoer1 = new Developer("제임스", designer1);
    const develoer2 = new Developer("김뚠뚠", designer2);
    this.developers.push(develoer1);
    this.developers.push(develoer2);
  }

  run() {
    for (let i = 0; i < this.designers.length; i++) {
      this.designers[i].doDesign();
    }
    for (let i = 0; i < this.developers.length; i++) {
      this.developers[i].writeCode();
      console.log(this.developers[i].code);
    }
  }
}
