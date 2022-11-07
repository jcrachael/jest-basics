// These are just two of the most commonly used matchers in Jest
// See the docs for more: https://jestjs.io/docs/using-matchers

/* eslint-disable no-undef */
import sum from './sum';
// .toBe() is a "matcher" that uses Object.is to check exact equality
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

// .toEqual() recursively checks every field of an object or array
test('adds 1 + 2 to equal 3 using .toEqual()', () => {
    expect(sum(1,2)).toEqual(3);
});

// you can also negate a matcher using .not
test('adds 1 + 2 to NOT equal 4', () => {
    expect(sum(1,2)).not.toEqual(4);
});

