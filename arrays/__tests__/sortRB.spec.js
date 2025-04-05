const { sortBallItems } = require('../sortRB');

describe("sort r-b- item tests", () => {
    test("sortBallItems in o(N)", () => {
        const list = [0, 1, 1, 1, 0, 0, 0, 0];
        const result = sortBallItems(list);
        expect(result).toEqual([0, 0, 0, 0, 0, 1, 1 , 1]);
    })
})