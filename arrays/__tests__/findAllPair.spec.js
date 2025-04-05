const { findAll } = require('../findAllPair')

describe("find all pair of answer closest zero tests", () => {
    test("find all test 1", () => {
        const list = [-8, -66, -60];
        const result = findAll(list);
        expect(result).toEqual([-60, -8])
    })
   
})


