const currency = {
    USD: 1,
    EUR: 0.95,
    PKR: 278.10,
    INR:74.57,
    AED: 3.67,
    GBP:0.76,
    CNY:7.24,
}

document.getElementById('convertor-form').addEventListener('submit' , function(e){
    e.preventDefault()

    let fromCurrency = document.getElementById('from').value
    let toCurrency = document.getElementById('to').value
    let amount = document.getElementById('amount').value

    let fromAmont = currency[fromCurrency]
    let toAmount = currency [toCurrency]
    let baseAmount = amount / fromAmont
    let convertedAmont = baseAmount * toAmount

    document.getElementById('result').textContent = `Converted Amount: ${Math.round(convertedAmont)}`
})
