import { PizzaIngredientsFactory } from "../interfaces/ingredientsFactory";
import { Pizza } from "../abstractions/Pizza";

export class CheesePizza extends Pizza {
  factory: PizzaIngredientsFactory;
  constructor(factory: PizzaIngredientsFactory) {
    super();
    this.factory = factory;
  }
  public prepare() {
    console.log(`########## Preparing ${this.getName()} ##########`);
    this.dough = this.factory.createDough();
    this.cheese = this.factory.createCheese();
    this.sauce = this.factory.createSauce();
  }
}
