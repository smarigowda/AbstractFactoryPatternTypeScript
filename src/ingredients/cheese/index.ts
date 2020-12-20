import { Cheese } from "../../interfaces/ingredients";

export class MozzarellaCheese implements Cheese {
  public name() {
    return "Mozzarella Cheese";
  }
}

export class ParmesanCheese implements Cheese {
  public name() {
    return "Parmesan Cheese";
  }
}

export class ReggianoCheese implements Cheese {
  public name() {
    return "Reggiano Cheese";
  }
}
