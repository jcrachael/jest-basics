import caesarCipher from "./caesarCipher";

it('Shift abc by 5 is fgh', () => {
    expect(caesarCipher('abc', 5)).toBe('fgh');
});

it('Shift ABC by 5 is FGH', () => {
    expect(caesarCipher('ABC', 5)).toBe('FGH');
})


it('Wrapping lowercase from z to a', () => {
    expect(caesarCipher('zoobaby', 1)).toBe('appcbcz')
});

it('Wrapping uppercase from Z to A', () => {
    expect(caesarCipher('Zoobaby', 1)).toBe('Appcbcz')
});

it('Keeps the same case throughout', () => {
    expect(caesarCipher('Cats And Dogs', 5)).toBe('Hfyx Fsi Itlx')
});

it('Keeps punctuation throughout', () => {
    expect(caesarCipher('Cats! An?d Dogs', 5)).toBe('Hfyx! Fs?i Itlx')
});
