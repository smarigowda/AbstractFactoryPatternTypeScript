import { Pizza } from "./abstractions/Pizza";
import { PizzaStore } from "./abstractions/PizzaStore";
import { PizzaType } from "./enum/pizzaTypes";
import { NYPizzaStore } from "./stores/nyPizzaStore";

console.log(
  "Hello, welcome to Abstract Factory Method design pattern...using TypeScript"
);

let pizza: Pizza;

let nyPizzaStore: PizzaStore = new NYPizzaStore();
pizza = nyPizzaStore.orderPizza(PizzaType.Cheese);
