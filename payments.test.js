describe("Payments test", function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 10;
  });

  it("should update id value on submitPaymentInfo()", function () {
    submitPaymentInfo();
    expect(paymentId).toEqual(1);
  });

  it("should calculate tip percent correctly on createCurPayment()", function () {
    submitPaymentInfo();
    createCurPayment();
    expect(allPayments["payment1"].tipAmt).toEqual("10");
  });

  it("should update payment table on appendPaymentTable()", function () {
    let curPayment = createCurPayment();
    appendPaymentTable(curPayment);
    expect(paymentTbody.textContent).toEqual("$100$1010%");
  });

  it("should update summary on updateSummary()", function () {
    updateSummary;
    expect(summaryTds.length).toEqual(3);
  });

  afterEach(function () {
    paymentId = 0;
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    serverTbody.innerHTML = "";
    allServers = {};
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
  });
});
