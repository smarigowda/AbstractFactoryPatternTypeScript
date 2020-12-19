import { Pizza } from "../../interfaces/Pizza";

export class ChicagoStyleVeggiePizza extends Pizza {
  constructor() {
    super();
    this.setName("Chicago Style Veggie Pizza");
    this.setDough("Thick Crust");
    this.setSauce("Red Sauce");
    this.setSauce("Veggies...");
  }
  public cut() {
    console.log("Cutting Pizza into Square Slices...");
  }
}
