import { Cheese, Clams, Dough, Pepperoni, Sauce, Veggies } from "./ingredients";

export abstract class Pizza {
  private name: string;
  private dough: Dough;
  private sauce: Sauce;
  private cheese: Cheese;
  private pepperoni: Pepperoni;
  private clams: Clams;
  private veggies: Veggies[];

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
  public setDough(dough: Dough): void {
    this.dough = dough;
  }
  public setSauce(sauce: Sauce): void {
    this.sauce = sauce;
  }
  public addVeggies(veggies: Veggies): void {
    this.veggies.push(veggies);
  }
  public setCheese(cheese: Cheese): void {
    this.cheese = cheese;
  }
}
