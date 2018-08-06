// This JS file is used to do the calculations for the position size
var validForm = 'False';
validForm = true;

// FORM VALIDATION
function checkPortfolioSize() {
	var portfolioSize = parseFloat(
		document.getElementById('portfolioSize').value
	);

	if (portfolioSize <= 0) {
		console.log('Please enter a positive value.');
		return (validForm = false);
	} else if (isNaN(portfolioSize)) {
		console.log('Please enter a numerical value.');
		return (validForm = false);
	} else {
		return (validForm = true);
	}
}

function checkVaR() {
	var VaR = parseFloat(document.getElementById('VaR').value);

	if ((VaR <= 0) | (VaR > 100)) {
		console.log('Please enter a numerical value between 0 and 100.');
		return (validForm = false);
	} else if (isNaN(VaR)) {
		console.log('Please enter a numerical value.');
		return (validForm = false);
	} else {
		return (validForm = true);
	}
}
function checkStockPrice() {
	var stockPrice = parseFloat(document.getElementById('stockPrice').value);

	if (stockPrice <= 0) {
		console.log('Please enter a stock stock value above $0');
		return (validForm = false);
	} else if (isNaN(stockPrice)) {
		console.log('Please enter a numerical value.');
		return (validForm = false);
	} else {
		return (validForm = true);
	}
}
function checkStopLoss() {
	var stopLoss = parseFloat(document.getElementById('stopLoss').value);
	var stockPrice = parseFloat(document.getElementById('stockPrice').value);

	if (stopLoss <= 0) {
		console.log('Please enter a stock stock value above $0');
		return (validForm = false);
	} else if (isNaN(stopLoss)) {
		console.log('Please enter a numerical value.');
		return (validForm = false);
	} else if (stockPrice <= stopLoss) {
		console.log('Your stop loss cannot be greater than the stock price.');
		return (validForm = false);
	} else {
		return (validForm = true);
	}
}

// Rounding function
function RoundNum(num, length) {
	var number = Math.round(num * Math.pow(10, length)) / Math.pow(10, length);
	return number;
}

// Calculates position size required
function calculatePosSize() {
	// Declare variables
	var portfolioSize = parseFloat(
		document.getElementById('portfolioSize').value
	);
	var VaR = parseFloat(document.getElementById('VaR').value) / 100;
	var stockPrice = parseFloat(document.getElementById('stockPrice').value);
	var stopLoss = parseFloat(document.getElementById('stopLoss').value);
	var posSize = RoundNum((portfolioSize * VaR) / (stockPrice - stopLoss), 0);
	var exposure = RoundNum(stockPrice * posSize, 2);
	var exposurePcnt = RoundNum((exposure / portfolioSize) * 100, 2);
	var riskCapital = RoundNum(posSize * (stockPrice - stopLoss), 2);
	var riskCapitalPcnt = RoundNum((riskCapital / portfolioSize) * 100, 2);

	if (validForm == true) {
		// Displays message and calculated position size
		document.getElementById('message1').innerHTML =
			'Based on a portfolio size of $' +
			portfolioSize +
			', your recommended number of stocks to purchase is ' +
			posSize +
			'.';
		document.getElementById('message2').innerHTML =
			'Your exposure in this trade will be $' +
			exposure +
			' or ' +
			exposurePcnt +
			'%' +
			' of your portfolio, and your risk capital (your maximum loss) in this trade will be $' +
			riskCapital +
			' or ' +
			riskCapitalPcnt +
			'% of your portfolio.';
		document.getElementById('message1').style.display = 'block';
		document.getElementById('message2').style.display = 'block';
	} else {
		document.getElementById('message1').style.display = 'none';
		document.getElementById('message2').style.display = 'none';
	}
}
