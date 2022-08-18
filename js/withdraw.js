/*
1. add event handler to the withdraw button
2. get the input filed value by using getInputValueById function
3. get previous withdraw total by using getTextElementValueById function 
4. calculate newWithdrawTotal using setTextElementById
5. 

*/
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputValueById("withdraw-filed");
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementById("withdraw-total", newWithdrawTotal);

  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementById("balance-total", newBalanceTotal);
});
