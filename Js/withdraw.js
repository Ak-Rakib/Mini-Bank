
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getElementFieldValueById('withdraw-field');
    const previousWithdrawAmount = getElementValueById('withdraw-total');
    const withdrawTotal = newWithdrawAmount + previousWithdrawAmount;
    setElementValueById('withdraw-total', withdrawTotal);

    const getPreviousBalance = getElementValueById('current-balance');
    const currentNewBalance = getPreviousBalance - newWithdrawAmount;
    setElementValueById('current-balance', currentNewBalance);
});