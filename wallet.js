function formatCurrency(amount) {
  return '$' + amount.toLocaleString();
}

//  pay button
document.getElementById('pay-btn').addEventListener('click', function () {
  const amountInput = document.getElementById('amount-input');
  const amount = parseFloat(amountInput.value);
  if (!isNaN(amount) && amount > 0) {
    // get the current balance and update
    const balanceElement = document.getElementById('balance');
    const currentBalance = parseFloat(balanceElement.textContent.replace(/[^0-9.-]+/g, ""));
    const newBalance = currentBalance - amount;
    balanceElement.textContent = formatCurrency(newBalance);

    // add a new transaction row
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

    // clear the amount input
    amountInput.value = '';
  } else {
    alert('Please enter a valid amount.');
  }
});

// top up button
document.getElementById('top-up-btn').addEventListener('click', function () {
  const amountInput = prompt('Enter amount to top up:');
  if (amountInput === null) {
    return;
  }

  const amount = parseFloat(amountInput);
  if (!isNaN(amount) && amount > 0) {
    // get the current balance and update
    const balanceElement = document.getElementById('balance');
    const currentBalance = parseFloat(balanceElement.textContent.replace(/[^0-9.-]+/g, ""));
    const newBalance = currentBalance + amount;
    balanceElement.textContent = formatCurrency(newBalance);

    // add a new transaction row 
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
  } else {
    alert('Please enter a valid amount.');
  }
});

