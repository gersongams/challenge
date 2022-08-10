const {
    minCost
} = require('./index');

describe("Testing minCost function", () => {
    it('Test case 1', () => {
        const N1 = 4;
        const H1 = [1, 3, 2, 1000000000];
        const M1 = [7, 3, 6, 2];
        expect(minCost(N1, H1, M1)).toEqual(0);
    })

    it('Test case 2', () => {
        const N2 = 3;
        const H2 = [2, 2, 2];
        const M2 = [3, 10, 6];
        expect(minCost(N2, H2, M2)).toEqual(9);
    })

    it('Test case 3', () => {
        const N3 = 3;
        const H3 = [2, 2, 3];
        const M3 = [4, 1, 5];
        expect(minCost(N3, H3, M3)).toEqual(2);
    })
})
