class bmi {

    // constructer which assigns two local variables
    constructor(height, weight){
        this.height =  height;
        this.weight = weight;
    }

    // method to calculate and return the BMI
    calculateBMI(){

        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}

// Instance of class bmi
let MyBmi = new bmi(2, 90);
let calcBMI = MyBmi.calculateBMI();

// Output BMI to screen
console.log(calcBMI);


// Going to run the above code in node
// NOTE: right click gmi.js -> open in integrated terminal -> type: node filename.js