import { Pizza } from "../../interfaces/Pizza";

export class NYStylePepperoniPizza extends Pizza {
  constructor() {
    super();
    this.setName("NY Style Pepperoni Pizza");
    this.setDough("Thin Crust Dough");
    this.setSauce("Marinara Sauce");
    this.setSauce("Sliced Pepperoni");
  }
}
