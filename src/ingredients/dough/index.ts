import { Dough } from "../../interfaces/ingredients";

export class ThickCrustDough implements Dough {
  public name() {
    return "Thick Crust Dough";
  }
}

export class ThinCrustDough implements Dough {
  public name() {
    return "Thin Crust Dough";
  }
}
