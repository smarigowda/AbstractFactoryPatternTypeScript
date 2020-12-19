import { PizzaType } from "../enum/pizzaTypes";
import { Pizza } from "./Pizza";

export abstract class PizzaStore {
  public orderPizza(type: PizzaType): Pizza {
    let pizza: Pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }

  protected abstract createPizza(type: PizzaType): Pizza;
}
