const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  // how do we create specs again???
  it('returns yes when passed a boolean value of true', () => {
    const result = booleanToWord(true);
    expect(result).toBe('Yes');
  })

  it('returns no when passed a boolean value of false', () => {
    const result = booleanToWord(false);
    expect(result).toBe('No');
  })
});
