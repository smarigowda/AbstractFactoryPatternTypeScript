import { Pizza } from "../abstractions/Pizza";
import { PizzaStore } from "../abstractions/PizzaStore";
import { PizzaType } from "../enum/pizzaTypes";
import { ChicagoPizzaIngredientsFactory } from "../ingredientsFactories/chicagoPizzaIngredientsFactory";
import { PizzaIngredientsFactory } from "../interfaces/ingredientsFactory";
import { CheesePizza } from "../pizas/CheesePizza";
import { ClamPizza } from "../pizas/ClamPizza";

export class ChicagoPizzaStore extends PizzaStore {
  ingredientsFactory: PizzaIngredientsFactory = new ChicagoPizzaIngredientsFactory();
  constructor() {
    super();
  }
  createPizza(pizzaType: PizzaType): Pizza {
    let pizza: Pizza;
    if (pizzaType === PizzaType.Cheese) {
      pizza = new CheesePizza(this.ingredientsFactory);
      pizza.setName("Chicago Style Cheese Pizza...!");
    } else if (pizzaType === PizzaType.Clam) {
      pizza = new ClamPizza(this.ingredientsFactory);
      pizza.setName("Chicago Style Clam Pizza...!");
    }
    return pizza;
  }
}
