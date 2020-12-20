import { Pizza } from "../abstractions/Pizza";
import { PizzaIngredientsFactory } from "../interfaces/ingredientsFactory";

export class VeggiePizza extends Pizza {
  ingFactory: PizzaIngredientsFactory;

  constructor(ingFactory: PizzaIngredientsFactory) {
    super();
    this.ingFactory = ingFactory;
  }
  prepare(): void {
    console.log(`########## Preparing ${this.getName()} ##########`);
    this.dough = this.ingFactory.createDough();
    this.sauce = this.ingFactory.createSauce();
    this.cheese = this.ingFactory.createCheese();
    this.veggies = this.ingFactory.createVeggies();
  }
}
