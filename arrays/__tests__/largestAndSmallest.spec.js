const { getMaxAndMin } = require('../largestAndSmallest');

test('getMaxAndMin with a typical array', () => {
    const numbers = [3, 5, 2, 1, 50, 0, -13, -100];
    const result = getMaxAndMin(numbers);
    expect(result).toEqual({ smallest: -100, largest: 50 });

})

test('getMaxAndMin with a single element array', () => {
    const numbers = [42];
    const result = getMaxAndMin(numbers);
    expect(result).toEqual({ smallest: 42, largest: 42 });

})

// test('getMaxAndMin with an array of negative numbers', () => {
//     const numbers = [-3, -10, -5, -8 -1];
//     const result = getMaxAndMin(numbers);
//     expect(result).toEqual({ smallest: -10, largest: -1 });

// })

test('getMaxAndMin with all zeros', () => {
    const numbers = [0, 0, 0, 0];
    const result = getMaxAndMin(numbers);
    expect(result).toEqual({ smallest: 0, largest: 0 });
});