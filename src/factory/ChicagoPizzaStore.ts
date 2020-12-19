import { PizzaType } from "../enum/pizzaTypes";
import { Pizza } from "../interfaces/Pizza";
import { PizzaStore } from "../interfaces/PizzaStore";
import { ChicagoStyleCheesePizza } from "../pizas/ChicagoStyle/ChicagoStyleCheesePizza";
import { ChicagoStyleClamPizza } from "../pizas/ChicagoStyle/ChicagoStyleClamPizza";
import { ChicagoStylePepperoniPizza } from "../pizas/ChicagoStyle/ChicagoStylePepperoniPizza";
import { ChicagoStyleVeggiePizza } from "../pizas/ChicagoStyle/ChicagoStyleVeggiePizza";

export class ChicagoPizzaStore extends PizzaStore {
  constructor() {
    super();
  }
  protected createPizza(pizzaType: PizzaType): Pizza {
    if (pizzaType === PizzaType.Cheese) {
      return new ChicagoStyleCheesePizza();
    } else if (pizzaType === PizzaType.Clam) {
      return new ChicagoStyleClamPizza();
    } else if (pizzaType === PizzaType.Pepperoni) {
      return new ChicagoStylePepperoniPizza();
    } else if (pizzaType === PizzaType.Veggie) {
      return new ChicagoStyleVeggiePizza();
    }
  }
}
