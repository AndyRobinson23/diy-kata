const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    const result = reachDestination(44, 10);

    expect(result).toMatch(/4.5/);
  });
});
