"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    // { [index: string]: number } = {};
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    // Returns the sum of all items using each item's massKg property
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    };
    Rocket.prototype.canAdd = function (item) {
        return this.currentWeightKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.currentWeightKg = function () {
        return this.sumWeight(this.cargoItems) + this.sumWeight(this.astronauts);
    };
    Rocket.prototype.sumWeight = function (items) {
        var total = 0;
        for (var i = 0; i < items.length; i++) {
            total += items[i].massKg;
        }
        return total;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
