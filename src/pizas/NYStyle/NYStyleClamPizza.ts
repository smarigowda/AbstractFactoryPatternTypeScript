import { Pizza } from "../../interfaces/Pizza";
export class NYStyleClamPizza extends Pizza {
  constructor() {
    super();
    this.setName("NY Style Clam Pizza");
    this.setDough("Thin Crust");
    this.setSauce("Green Sauce");
    this.addToppoing("Green Pepper");
  }
}
