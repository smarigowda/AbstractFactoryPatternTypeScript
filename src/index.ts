import { PizzaType } from "./enum/pizzaTypes";
import { ChicagoPizzaStore } from "./factory/ChicagoPizzaStore";
import { NYPizzaStore } from "./factory/NYPizzaStore";
import { Pizza } from "./interfaces/Pizza";
import { PizzaStore } from "./interfaces/PizzaStore";

console.log(
  "Hello, welcome to Factory Method design pattern...using TypeScript"
);

let pizza: Pizza;
let nyPizzaStore: PizzaStore = new NYPizzaStore();
let chicagoPizzaStore: PizzaStore = new ChicagoPizzaStore();

pizza = nyPizzaStore.orderPizza(PizzaType.Cheese);
pizza = chicagoPizzaStore.orderPizza(PizzaType.Cheese);

pizza = nyPizzaStore.orderPizza(PizzaType.Clam);
pizza = chicagoPizzaStore.orderPizza(PizzaType.Clam);

pizza = nyPizzaStore.orderPizza(PizzaType.Pepperoni);
pizza = chicagoPizzaStore.orderPizza(PizzaType.Pepperoni);

pizza = nyPizzaStore.orderPizza(PizzaType.Veggie);
pizza = chicagoPizzaStore.orderPizza(PizzaType.Veggie);
