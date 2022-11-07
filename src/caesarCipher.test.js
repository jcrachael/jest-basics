import caesarCipher from "./caesarCipher";

it('Wrapping from z to a', () => {
    expect(caesarCipher('zoobaby', 1)).toBe('appcbcz')
})

// TODO write tests as per specs: https://www.theodinproject.com/lessons/node-path-javascript-testing-practice (part 4)