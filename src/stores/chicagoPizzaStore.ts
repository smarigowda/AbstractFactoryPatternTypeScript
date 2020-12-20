import { Pizza } from "../abstractions/Pizza";
import { PizzaStore } from "../abstractions/PizzaStore";
import { PizzaType } from "../enum/pizzaTypes";
import { ChicagoPizzaIngredientsFactory } from "../ingredientsFactories/chicagoPizzaIngredientsFactory";
import { PizzaIngredientsFactory } from "../interfaces/ingredientsFactory";
import { CheesePizza } from "../pizas/CheesePizza";
import { ClamPizza } from "../pizas/ClamPizza";
import { PepperoniPizza } from "../pizas/PepperoniPizza";
import { VeggiePizza } from "../pizas/VeggiePizza";

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
    } else if (pizzaType === PizzaType.Pepperoni) {
      pizza = new PepperoniPizza(this.ingredientsFactory);
      pizza.setName("Chicago Style Pepperoni Pizza");
    } else if (pizzaType === PizzaType.Veggie) {
      pizza = new VeggiePizza(this.ingredientsFactory);
      pizza.setName("Chicago Style Veggie Pizza");
    } else {
      throw new Error("type not supported sorry");
    }
    return pizza;
  }
}
