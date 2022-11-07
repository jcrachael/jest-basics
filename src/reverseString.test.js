/* eslint-disable no-undef */

import reverseString from './reverseString';

test('Takes a string and returns it reversed', () => {
    expect(reverseString('hello, world')).toBe('dlrow ,olleh');
});

test('Works on capitalised strings', () => {
    expect(reverseString('Rachael Cole')).toBe('eloC leahcaR');
});