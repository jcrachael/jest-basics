import capitalise from './capitalise';

test('Returns a string with the first character capitalised', () => {
    expect(capitalise('hello, world')).toBe('Hello, world');
});

test('Returns a string with the first character capitalised (2)', () => {
    expect(capitalise('please give me a capital')).toBe('Please give me a capital');
});