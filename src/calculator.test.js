import Calculator from './calculator';

test('add 1 + 2 to be 3', () => {
    let myCalc = new Calculator();
    expect(myCalc.add(1,2)).toBe(3);
});

test('subtract 3 - 2 to be 1', () => {
    let myCalc = new Calculator();
    expect(myCalc.subtract(3,2)).toBe(1);
});

test('divide 12 by 4 to be 3', () => {
    let myCalc = new Calculator();
    expect(myCalc.divide(12,4)).toBe(3);
});

test('divide 12 by 0 to be error', () => {
    let myCalc = new Calculator();
    expect(myCalc.divide(12,0)).toBe("Error: can't divide by zero!");
});

test('multiply 12 by 4 to be 48', () => {
    let myCalc = new Calculator();
    expect(myCalc.multiply(12,4)).toBe(48);
});
