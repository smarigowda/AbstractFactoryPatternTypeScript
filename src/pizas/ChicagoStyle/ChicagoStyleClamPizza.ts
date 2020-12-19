import { Pizza } from "../../interfaces/Pizza";
export class ChicagoStyleClamPizza extends Pizza {
  constructor() {
    super();
    this.setName("Chicago Clam Pizza");
    this.setDough("Fleischmann RapidRise Yeast 30");
    this.setSauce("Red Sauce");
    this.addToppoing("Onion");
  }
  public cut() {
    console.log("Cutting Pizza into Square Slices...");
  }
}
