const { humanCatDogYears } = require("../src");

// Look Ma, no handlebars!!!

describe("humanCatDogYears", () => {
    it('returns an array of human, cat and dog years when passed a number of human years as an argument', () => {
        const result = humanCatDogYears(7);
        expect(result).toContain(7, 44, 49);
    });
});