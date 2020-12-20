import { Clams } from "../interfaces/ingredients";

export class FreshClams implements Clams {
  public name(): string {
    return "Fresh Clams";
  }
}
