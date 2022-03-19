function inputFieldBalance(inputFieldId) {
  const depositInput = document.getElementById(inputFieldId);
  const depositText = depositInput.value;
  const depositInputBalance = parseFloat(depositText);
  depositInput.value = "";
  return depositInputBalance;
}

function balanceTotal(id, money) {
  const innerBalance = document.getElementById(id);
  const innerBalanceText = innerBalance.innerText;
  const balance = parseFloat(innerBalanceText);
  const final = balance + money;
  innerBalance.innerText = final;
}
function getCurrentBalance() {
  const balanceTotal = document.getElementById("total-balance");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}

function myTotalAccountBalance(amount, isAdd) {
  const totalBalanceAccount = document.getElementById("total-balance");
  const previousBalance = getCurrentBalance();
  if (isAdd == true) {
    totalBalanceAccount.innerText = previousBalance + amount;
  } else {
    totalBalanceAccount.innerText = previousBalance - amount;
  }
}
document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositAmount = inputFieldBalance("deposit-input");
  if (depositAmount > 0) {
    balanceTotal("deposit-total", depositAmount);
    myTotalAccountBalance(depositAmount, true);
  }
});
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawAmount = inputFieldBalance("withdraw-input");
  const currentBalance = getCurrentBalance();
  if (withdrawAmount > 0 && withdrawAmount <= currentBalance) {
    balanceTotal("withdraw-total", withdrawAmount);
    myTotalAccountBalance(withdrawAmount, false);
  }
});
