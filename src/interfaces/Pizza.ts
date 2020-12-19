export abstract class Pizza {
  private name: string;
  private dough: string;
  private sauce: string;
  private toppings = [];

  public prepare(): void {
    console.log(
      `################### Preparing ${this.name} ###################`
    );
    console.log(`Tossing Dough...`);
    console.log(`Adding Sauce...`);
    console.log(`Adding Toppings...`);
  }
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
  public setDough(dough: string): void {
    this.dough = dough;
  }
  public setSauce(sauce: string): void {
    this.sauce = sauce;
  }
  public addToppoing(topping: string): void {
    this.toppings.push(topping);
  }
}
