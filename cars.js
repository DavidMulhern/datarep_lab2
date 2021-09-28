class vehicle{

    // constructer which assigns local variables
    constructor(make, model, year){

        this.make = make;
        this.model = model;
        this.year = year;
    }

    // method that logs information to screen
    information(){
        // log to screen with variable, use $ NOTE: careful, use tilde ` ` 
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }

}

// create a new instance of vehicle class
let myVehicle = new vehicle('VW', 'Golf', 2008);
// invoke information mehtod
let info = myVehicle.information();

// Inheritance
class Cars extends vehicle {
    constructor(make, model, year, doors){
        // Using parent variables 
        super(make, model, year);
        // door added as it's not included in parent class
        this.doors = doors
    }

    information(){
        // This will extend from the parent class (super.information) and there after add doors 
        super.information();
        console.log(`Doors: ${this.doors}`);
    }
}

let myCar = new Cars('VW', 'Golf', 2020, 5);
// Information() with inheritance now included
myCar.information();
