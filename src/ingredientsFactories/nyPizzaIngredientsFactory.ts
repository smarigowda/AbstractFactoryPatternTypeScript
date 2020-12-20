import { ReggianoCheese } from "../ingredients/cheese";
import { FreshClams } from "../ingredients/clams";
import { ThickCrustDough } from "../ingredients/dough";
import { SlicedPepperoni } from "../ingredients/pepperoni";
import { MarinaraSauce } from "../ingredients/sauce";
import { Garlic, Mashroom, Onion, RedPepper } from "../ingredients/veggies";
import { PizzaIngredientsFactory } from "../interfaces/ingredientsFactory";
import { Veggies } from "../interfaces/ingredients";

export class NYPizzaIngredientsFactory implements PizzaIngredientsFactory {
  createDough() {
    return new ThickCrustDough();
  }
  createSauce() {
    return new MarinaraSauce();
  }
  createCheese() {
    return new ReggianoCheese();
  }
  createVeggies() {
    let veggies: Veggies[] = [
      new Garlic(),
      new Onion(),
      new Mashroom(),
      new RedPepper(),
    ];
    return veggies;
  }
  createPepperoni() {
    return new SlicedPepperoni();
  }
  createClam() {
    return new FreshClams();
  }
}
