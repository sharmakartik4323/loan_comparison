let clr = document.getElementById("btn1");
function myFun() {
  const loanMonth = parseFloat(document.querySelector("#mnt").value);
  const loanYear = parseFloat(document.querySelector("#yrs").value);
  const interest = parseFloat(document.querySelector(".intig").value);
  const loanT = loanYear * 12 + loanMonth;

  const loanYear1 = parseFloat(document.querySelector("#yrsa").value);
  const loanMonth1 = parseFloat(document.querySelector("#mnta").value);
  const interest1 = parseFloat(document.querySelector("#intiga").value);
  const loanT1 = loanYear1 * 12 + loanMonth1;

  let calc = document.querySelector(".btn");
  const price = parseInt(document.querySelector(".pr").innerHTML);

  const totalPayment1 = calculateTotalPayment(price, interest, loanT);
  const totalPayment2 = calculateTotalPayment(price, interest1, loanT1);

  const bestDeal = totalPayment1 < totalPayment2 ? "HDFC" : "PNB";
  calc.innerHTML = `${bestDeal} is providing better EMI`;
}

clr.addEventListener("click", () => {
  let x = document.querySelector("#yrs");
  let y = document.querySelector("#mnt");
  let z = document.querySelector("#btn3");
  let w = document.querySelector(".intig");

  let x1 = document.querySelector("#yrsa");
  let y1 = document.querySelector("#mnta");
  let w1 = document.querySelector("#intiga");

  z.innerHTML = "Calculate Your EMI";
  x.value = "";
  y.value = "";
  w.value = "";

  x1.value = "";
  y1.value = "";
  w1.value = "";
});

/*calc.addEventListener("click", () => {
  loanYears = loanYear.value * 12;
  a = parseInt(loanYears);
  b = parseInt(loanMonth.value);
  let loanTime = a + b;
  price = parseInt(price.innerHTML);
  c = loanMonth.value;
  interests = parseInt(interest.value);
  loanTTime = c / 12;
  totalyearlyROI = interests * loanTTime;
  $ = (totalyearlyROI / 100) * price;
  $$ = $ + price;
  ROI = $$ / loanTime;
  calc.innerHTML = "Your Monthly EMI : " + ROI.toFixed(2);
});*/

function calculateTotalPayment(price, interest, loanT) {
  monthlyTenure = loanT * 12;
  totalyearlyROI = interest * loanT;
  Z = (totalyearlyROI / 100) * price;
  ZZ = Z + price;
  ROI = ZZ / monthlyTenure;
  ROI = ROI.toFixed(2);
  return ROI;
}