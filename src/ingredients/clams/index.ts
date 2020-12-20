import { Clams } from "../../interfaces/ingredients";

export class FreshClams implements Clams {
  public name(): string {
    return "Fresh Clams";
  }
}

export class FrozenClams implements Clams {
  public name(): string {
    return "Frozen Clams";
  }
}
