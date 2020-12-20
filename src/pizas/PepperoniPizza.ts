import { isPrefixUnaryExpression } from "typescript";
import { Pizza } from "../abstractions/Pizza";
import { PizzaIngredientsFactory } from "../interfaces/ingredientsFactory";

export class PepperoniPizza extends Pizza {
  ingFactory: PizzaIngredientsFactory;
  constructor(ingFactory: PizzaIngredientsFactory) {
    super();
    this.ingFactory = ingFactory;
  }
  public prepare(): void {
    console.log(`########## Preparing ${this.getName()} ##########`);
    this.dough = this.ingFactory.createDough();
    this.sauce = this.ingFactory.createSauce();
    this.cheese = this.ingFactory.createCheese();
    this.pepperoni = this.ingFactory.createPepperoni();
    this.veggies = this.ingFactory.createVeggies();
  }
}
