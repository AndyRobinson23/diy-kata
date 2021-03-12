const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    const result = numberToReversedDigits(12345);
    expect(result).toContain(5, 4, 3, 2, 1);
  });
});
