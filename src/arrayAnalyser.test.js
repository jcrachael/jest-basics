import arrayAnalyser from "./arrayAnalyser";

it('array [1,8,3,4,2,6] returns correct object properties', () => {
    expect(arrayAnalyser([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6})
});

it('array [1,1,1] returns correct object properties', () => {
    expect(arrayAnalyser([1,1,1])).toEqual({average: 1, min: 1, max: 1, length: 3})
});