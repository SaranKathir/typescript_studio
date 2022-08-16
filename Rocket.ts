
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";
import { Astronaut } from "./Astronaut";

export class Rocket{

  name:string;
  totalCapacityKg:number;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];


 // { [index: string]: number } = {};
    constructor(name:string,totalCapacityKg:number){
        this.name=name;
        this.totalCapacityKg=totalCapacityKg;
     
    }
   // Returns the sum of all items using each item's massKg property

   addCargo(cargo: Cargo) {
    if (this.canAdd(cargo)) {
      this.cargoItems.push(cargo);
      return true;
    }
    return false;
  }
  addAstronaut(astronaut: Astronaut) {
    if (this.canAdd(astronaut)) {
      this.astronauts.push(astronaut);
      return true;
    }
    return false;
  }
  canAdd(item: Payload): boolean {
    return this.currentWeightKg() + item.massKg <= this.totalCapacityKg;
  }
  currentWeightKg(): number {
    return this.sumWeight(this.cargoItems) + this.sumWeight(this.astronauts);
  }
  sumWeight(items: Payload[]): number {
    let total: number = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].massKg;
    }
    return total;
  }

}