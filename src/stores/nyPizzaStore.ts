import { PizzaType } from "../enum/pizzaTypes";
import { PizzaIngredientsFactory } from "../interfaces/ingredientsFactory";
import { Pizza } from "../abstractions/Pizza";
import { PizzaStore } from "../abstractions/PizzaStore";
import { CheesePizza } from "../pizas/CheesePizza";
import { NYPizzaIngredientsFactory } from "../ingredientsFactories/nyPizzaIngredientsFactory";

export class NYPizzaStore extends PizzaStore {
  nyPizzaIngredientsFactory: PizzaIngredientsFactory = new NYPizzaIngredientsFactory();
  constructor() {
    super();
  }
  createPizza(pizzaType: PizzaType): Pizza {
    let pizza: Pizza;
    if (pizzaType === PizzaType.Cheese) {
      pizza = new CheesePizza(this.nyPizzaIngredientsFactory);
      pizza.setName("NY Style Cheese Pizza....!");
    }
    return pizza;
  }
}
