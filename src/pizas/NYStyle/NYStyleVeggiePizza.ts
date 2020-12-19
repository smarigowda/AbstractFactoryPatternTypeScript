import { Pizza } from "../../interfaces/Pizza";

export class NYStyleVeggiePizza extends Pizza {
  constructor() {
    super();
    this.setName("NY Style Veggie Pizza");
    this.setDough("Think Crust");
    this.setSauce("Green Sauce");
    this.addToppoing("Veggies");
  }
}
