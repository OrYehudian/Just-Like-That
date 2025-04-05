const { reverseArrayInPlace } = require('../reverseArray')

describe("reverseArray tests", () => {
    it("reversArrayInPlace of number", () => {
        const list = [3, 5, 2, 1, 50, 0, -13, -100];
        reverseArrayInPlace(list);
        expect(list).toEqual([-100, -13, 0, 50, 1, 2, 5, 3]);
    })

    it("reversArrayInPlace of strings", () => {
        const list = ['Hi', 'my', 'name is', 'Or'];
        reverseArrayInPlace(list);
        expect(list).toEqual(['Or','name is', 'my', 'Hi']);
    })
});
