const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  it("returns the employee's role in the company", () => {
    const employees = [{
      name: 'Satti',
      role: 'Developer'
    }, {
      name: 'Jenny',
      role: 'Sales Associate'
    }, {
      name: 'Javid',
      role: 'Human Recommended Reading Assistant'
    }]

    const result = getEmployerRole('Javid', employees);

    expect(result).toBe('Human Recommended Reading Assistant');
  });
});
