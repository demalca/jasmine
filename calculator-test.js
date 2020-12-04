describe("should calculate the monthly rate correctly", function () {
  it("should calculate zero dollars and zero cents", function () {
    const values = { amount: "", years: "", rate: "" };
    expect(calculateMonthlyPayment(values)).toEqual("0.00");
  });
  it("should calculate monthly rate correctly with given values", function () {
    const values = { amount: 120000, years: 10, rate: 10 };
    expect(calculateMonthlyPayment(values)).toEqual("1585.81");
  });
});

describe("should return a result with 2 decimal places", function () {
  it("should return a result with 2 decimal places", function () {
    const values = { amount: 987654, years: 32, rate: 10 };
    expect(calculateMonthlyPayment(values)).toBe("8585.07");
  });
  it("should return a result with 2 decimal places when no values given", function () {
    const values = { amount: "", years: "", rate: "" };
    expect(calculateMonthlyPayment(values)).toBe("0.00");
  });
});
