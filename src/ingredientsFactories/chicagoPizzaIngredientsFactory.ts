import { MozzarellaCheese } from "../ingredients/cheese";
import { FrozenClams } from "../ingredients/clams";
import { ThickCrustDough } from "../ingredients/dough";
import { SlicedPepperoni } from "../ingredients/pepperoni";
import { PlumTomatoSaucce } from "../ingredients/sauce";
import { BlackOlives, EggPlant, Spinach } from "../ingredients/veggies";
import {
  Cheese,
  Clams,
  Dough,
  Pepperoni,
  Sauce,
  Veggies,
} from "../interfaces/ingredients";
import { PizzaIngredientsFactory } from "../interfaces/ingredientsFactory";

export class ChicagoPizzaIngredientsFactory implements PizzaIngredientsFactory {
  createDough(): Dough {
    return new ThickCrustDough();
  }
  createCheese(): Cheese {
    return new MozzarellaCheese();
  }
  createClam(): Clams {
    return new FrozenClams();
  }
  createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }
  createVeggies(): Veggies[] {
    return [new BlackOlives(), new Spinach(), new EggPlant()];
  }
  createSauce(): Sauce {
    return new PlumTomatoSaucce();
  }
}
