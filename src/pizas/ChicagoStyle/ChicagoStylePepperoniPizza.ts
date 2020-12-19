import { Pizza } from "../../interfaces/Pizza";

export class ChicagoStylePepperoniPizza extends Pizza {
  constructor() {
    super();
    this.setName("Chicago Style Pepperoni Pizza");
    this.setDough("Thick Crust Dough");
    this.setSauce("Red Sauce");
    this.addToppoing("Sliced Pepperoni");
  }
  public cut() {
    console.log("Cutting Pizza into Square Slices...");
  }
}
