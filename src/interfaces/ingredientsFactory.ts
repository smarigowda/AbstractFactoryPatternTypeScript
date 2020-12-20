import { Cheese, Clams, Dough, Pepperoni, Sauce, Veggies } from "./ingredients";
export interface PizzaIngredientsFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createVeggies(): Veggies[];
  createPepperoni(): Pepperoni;
  createClam(): Clams;
}
