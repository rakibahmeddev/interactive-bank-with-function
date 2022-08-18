document.getElementById("btn-deposit").addEventListener("click", function () {
  // deposit input filed value
  const newDepositAmount = getInputValueById("deposit-field");

  //   previous deposit total
  const previousDepositTotal = getTextElementValueById("deposit-total");

  //   calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  setTextElementById("deposit-total", newDepositTotal);

  // get previous balance total by using the function
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementById("balance-total", newBalanceTotal);
});
