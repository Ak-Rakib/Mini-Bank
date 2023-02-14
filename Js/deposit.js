
document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getElementFieldValueById('deposit-field');
    const previousDepositAmount = getElementValueById('deposit-balance');
    const currentDepositAmount = newDepositAmount + previousDepositAmount;
    setElementValueById('deposit-balance', currentDepositAmount);


    const balanceAmount = getElementValueById('current-balance');
    const balanceAmountTotal = balanceAmount + newDepositAmount;
    setElementValueById('current-balance', balanceAmountTotal);
});