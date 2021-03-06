import { Pizza } from "../abstractions/Pizza";
import { PizzaIngredientsFactory } from "../interfaces/ingredientsFactory";

export class ClamPizza extends Pizza {
  ingFactory: PizzaIngredientsFactory;
  constructor(ingFactory: PizzaIngredientsFactory) {
    super();
    this.ingFactory = ingFactory;
  }
  public prepare(): void {
    console.log(`########## Preparing ${this.getName()} ##########`);
    this.dough = this.ingFactory.createDough();
    this.sauce = this.ingFactory.createSauce();
    this.cheese = this.ingFactory.createSauce();
    this.clam = this.ingFactory.createClam();
  }
}
