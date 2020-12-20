import {
  Cheese,
  Clams,
  Dough,
  Pepperoni,
  Sauce,
  Veggies,
} from "../interfaces/ingredients";

export abstract class Pizza {
  private name: string;
  protected dough: Dough;
  protected sauce: Sauce;
  protected cheese: Cheese;
  protected pepperoni: Pepperoni;
  protected clams: Clams;
  protected veggies: Veggies[];

  abstract prepare(): void;

  public bake(): void {
    console.log("Baking for 25 min at 350 degrees...");
  }
  public cut(): void {
    console.log("Cutting Pizza into daigonal slices...");
  }
  public box(): void {
    console.log("Boxing Pizza in Official box...");
  }
  public setName(name: string): void {
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }
}
