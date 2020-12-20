import { Pizza } from "./abstractions/Pizza";
import { PizzaStore } from "./abstractions/PizzaStore";
import { PizzaType } from "./enum/pizzaTypes";
import { ChicagoPizzaStore } from "./stores/chicagoPizzaStore";
import { NYPizzaStore } from "./stores/nyPizzaStore";

console.log(
  "Hello, welcome to Abstract Factory Method design pattern...using TypeScript"
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
