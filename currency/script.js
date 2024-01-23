function convert() {
    // user input
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    const exchangeRates = {
        USD: {
            EUR: 0.85,
            GBP: 0.73,
        },
        EUR: {
            USD: 1.18,
            GBP: 0.86,
        },
        GBP: {
            USD: 1.37,
            EUR: 1.16,
        },
    };

    if (!exchangeRates[fromCurrency] || !exchangeRates[fromCurrency][toCurrency]) {
        document.getElementById('result').innerText = 'Unsupported currency pair';
        return;
    }

    // Perform conversion
    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];

    // Display the result
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}