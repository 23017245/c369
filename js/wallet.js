function formatCurrency(amount) {
  return '$' + amount.toLocaleString();
}

// pay button
document.getElementById('pay-btn').addEventListener('click', function () {
  const amountInput = document.getElementById('amount-input');
  const amount = parseFloat(amountInput.value);
  if (!isNaN(amount) && amount > 0) {
    const balanceElement = document.getElementById('balance');
    const currentBalance = parseFloat(balanceElement.textContent.replace(/[^0-9.-]+/g, ""));

    if (amount > currentBalance) {
      alert('Insufficient funds. Cannot withdraw more than the current balance.');
      return;
    }

    // confirm transaction
    if (confirm(`Are you sure you want to withdraw $${amount.toFixed(2)}?`)) {
      // update balance
      const newBalance = currentBalance - amount;
      balanceElement.textContent = formatCurrency(newBalance);

      // add new txn row to the table
      const transactionTableBody = document.getElementById('transaction-table-body');
      const newRow = document.createElement('tr');

      const transactionID = Math.floor(Math.random() * 1000000000);
      const date = new Date().toLocaleString();

      newRow.innerHTML = `
        <td>Withdraw Money from Wallet <br> Transaction ID: ${transactionID} <br> ${date}</td>
        <td>$${amount.toFixed(2)}</td>
        <td>None</td>
        <td>Completed</td>
      `;
      transactionTableBody.appendChild(newRow);

      // clear amount input
      amountInput.value = '';
    }
  } else {
    alert('Please enter a valid amount.');
  }
});

// top-up button
document.getElementById('top-up-btn').addEventListener('click', function () {
  const amountInput = prompt('Enter amount to top up:');
  const cardNo = prompt ('Enter Card Number: ');
  const cardExp = prompt ('Enter Card Expiry Date: ');
  const cardCvv = prompt ('Enter Card CVV: ');
  if (amountInput === null) {
    return;
  }

  const amount = parseFloat(amountInput);
  if (!isNaN(amount) && amount > 0) {
    if (confirm(`Are you sure you want to top up $${amount.toFixed(2)}?`)) {
      const balanceElement = document.getElementById('balance');
      const currentBalance = parseFloat(balanceElement.textContent.replace(/[^0-9.-]+/g, ""));
      const newBalance = currentBalance + amount;
      balanceElement.textContent = formatCurrency(newBalance);

      // add new txn row to the table
      const transactionTableBody = document.getElementById('transaction-table-body');
      const newRow = document.createElement('tr');

      const transactionID = Math.floor(Math.random() * 1000000000);
      const date = new Date().toLocaleString();

      newRow.innerHTML = `
        <td>Add Money to Wallet <br> Transaction ID: ${transactionID} <br> ${date}</td>
        <td>None</td>
        <td>$${amount.toFixed(2)}</td>
        <td>Completed</td>
      `;
      transactionTableBody.appendChild(newRow);
    }
  } else {
    alert('Please enter a valid amount.');
  }
});
// Initialize payment in url
const params = new URLSearchParams(window.location.search);
const amount = params.get('amount');
if (amount) {
  document.getElementById('amount-input').value = amount;
}