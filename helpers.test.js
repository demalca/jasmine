describe("Helpers test", function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 10;
    submitPaymentInfo();
  });

  it("should sum total payment on sumPaymentTotal()", function () {
    expect(sumPaymentTotal("billAmt")).toEqual(100);
    billAmtInput.value = 200;
    tipAmtInput.value = 20;
    submitPaymentInfo();
    expect(sumPaymentTotal("billAmt")).toEqual(300);
  });

  it("should calculate tip percent correctly on calculateTipPercent()", function () {
    expect(calculateTipPercent(100, 17)).toEqual(17);
  });

  afterEach(function () {
    paymentId = 0;
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    allPayments = {};
  });
});
