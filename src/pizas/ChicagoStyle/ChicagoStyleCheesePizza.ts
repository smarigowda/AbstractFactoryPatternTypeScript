import { Pizza } from "../../interfaces/Pizza";

export class ChicagoStyleCheesePizza extends Pizza {
  constructor() {
    super();
    this.setName("Chicago Style Deep Dish Cheese Pizza");
    this.setDough("Extra Thick Crust Dough");
    this.setSauce("Plum Tomato Sauce");
    this.addToppoing("Shredded Mozzerella Cheese");
  }

  public cut() {
    console.log("Cutting Pizza into Square Slices...");
  }
}
