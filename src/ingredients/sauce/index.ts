import { Sauce } from "../../interfaces/ingredients";

export class MarinaraSauce implements Sauce {
  public name() {
    return "Marinara Sauce";
  }
}

export class PlumTomatoSaucce implements Sauce {
  public name() {
    return "Plum Tomato Sauce";
  }
}
