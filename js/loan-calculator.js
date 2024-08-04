const loanAmountInput = document.getElementById('loan-amount');
    const loanAmountValue = document.getElementById('loan-amount-value');
    const loanTermInput = document.getElementById('loan-term');
    const loanTermValue = document.getElementById('loan-term-value');

    function updateLoanAmount() {
        loanAmountValue.textContent = loanAmountInput.value;
        calculate();
    }

    function updateLoanTerm() {
        loanTermValue.textContent = loanTermInput.value;
        calculate();
    }

    loanAmountInput.addEventListener('input', updateLoanAmount);
    loanTermInput.addEventListener('input', updateLoanTerm);

    function calculate() {
        const loanAmount = parseFloat(loanAmountInput.value);
        const loanTerm = parseInt(loanTermInput.value);
        const interestRate = 0.06; 

        const monthlyInterestRate = interestRate / 12;
        const monthlyPayment = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTerm)) / (Math.pow(1 + monthlyInterestRate, loanTerm) - 1);
        const totalPayment = monthlyPayment * loanTerm;
        const totalInterest = totalPayment - loanAmount;

        document.getElementById('total-payment').textContent = `$${totalPayment.toFixed(1)}` + '0';
        document.getElementById('monthly-installment').textContent = `$${monthlyPayment.toFixed(1) + '0'}`;
        document.getElementById('total-interest').textContent = `$${totalInterest.toFixed(1) + '0'}`;

        // update chart
        const principalPercentage = (loanAmount / totalPayment) * 100;
        const interestPercentage = (totalInterest / totalPayment) * 100;
        document.querySelector('.circle-chart').style.background = `conic-gradient(#4A90E2 ${principalPercentage}%, #B8C5E2 ${principalPercentage}% ${principalPercentage + interestPercentage}%)`;
    }

    calculate();