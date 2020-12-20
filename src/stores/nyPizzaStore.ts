import { PizzaType } from "../enum/pizzaTypes";
import { PizzaIngredientsFactory } from "../interfaces/ingredientsFactory";
import { Pizza } from "../abstractions/Pizza";
import { PizzaStore } from "../abstractions/PizzaStore";
import { CheesePizza } from "../pizas/CheesePizza";
import { NYPizzaIngredientsFactory } from "../ingredientsFactories/nyPizzaIngredientsFactory";
import { ClamPizza } from "../pizas/ClamPizza";
import { PepperoniPizza } from "../pizas/PepperoniPizza";
import { VeggiePizza } from "../pizas/VeggiePizza";

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
    } else if (pizzaType === PizzaType.Clam) {
      pizza = new ClamPizza(this.nyPizzaIngredientsFactory);
      pizza.setName("NY Style Clam Pizza....!");
    } else if (pizzaType === PizzaType.Pepperoni) {
      pizza = new PepperoniPizza(this.nyPizzaIngredientsFactory);
      pizza.setName("NY Style Pepperoni Pizza...!");
    } else if (pizzaType === PizzaType.Veggie) {
      pizza = new VeggiePizza(this.nyPizzaIngredientsFactory);
      pizza.setName("NY Style Veggie Pizza...!");
    }
    return pizza;
  }
}
