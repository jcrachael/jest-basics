export default class Calculator {
    constructor() {
        
    }

    add(a,b) {
        return a + b;
    }

    subtract(a,b) {
        return a - b;
    }

    divide(a,b) {
        if (b === 0) {
            return "Error: can't divide by zero!";
        }
        return a / b;
    }

    multiply(a,b) {
        return a * b;
    }
};