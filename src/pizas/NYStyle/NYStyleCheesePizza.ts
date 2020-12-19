import { Pizza } from "../../interfaces/Pizza";

export class NYStyleCheesePizza extends Pizza {
  constructor() {
    super();
    this.setName("NY Style Cheese Pizza");
    this.setDough("Thin Crust Dough");
    this.setSauce("Marinara Sauce");
    this.addToppoing("Grated Reggiano Cheese");
  }
}
