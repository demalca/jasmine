window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const iniValues = { amount: 120000, years: 10, rate: 10 };

  const iniAmount = document.querySelector("#loan-amount");
  const iniYears = document.querySelector("#loan-years");
  const iniRate = document.querySelector("#loan-rate");

  iniAmount.value = iniValues.amount;
  iniYears.value = iniValues.years;
  iniRate.value = iniValues.rate;

  calculateMonthlyPayment(getCurrentUIValues());
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values.amount;
  let i = values.rate / 100 / 12;
  let n = values.years * 12;
  let formula = (p * i) / (1 - (1 + i) ** -n);
  let monthly = formula.toFixed(2).toString();
  if (monthly === "NaN") {
    monthly = "0.00";
  }
  return monthly;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPay = document.querySelector("#monthly-payment");
  monthlyPay.innerText = "$" + monthly;
}
