// This JS file is used for form validation of the position size, VaR, stock price, stop loss, etc

function checkPortfolioSize(validForm) {
	var portfolioSize = parseFloat(
		document.getElementById('portfolioSize').value
	);

	if (portfolioSize <= 0) {
		console.log('Please enter a positive value.');
	} else if (isNaN(portfolioSize)) {
		console.log('Please enter a numerical value.');
	}
}

function checkVaR() {
	var VaR = parseFloat(document.getElementById('VaR').value);

	if ((VaR <= 0) | (VaR > 100)) {
		console.log('Please enter a numerical value between 0 and 100.');
	} else if (isNaN(VaR)) {
		console.log('Please enter a numerical value.');
	}
}
function checkStockPrice() {
	var stockPrice = parseFloat(document.getElementById('stockPrice').value);

	if (stockPrice <= 0) {
		console.log('Please enter a stock stock value above $0');
	} else if (isNaN(stockPrice)) {
		console.log('Please enter a numerical value.');
	}
}
function checkStopLoss() {
	var stopLoss = parseFloat(document.getElementById('stopLoss').value);
	var stockPrice = parseFloat(document.getElementById('stockPrice').value);

	if (stopLoss <= 0) {
		console.log('Please enter a stock stock value above $0');
	} else if (isNaN(stopLoss)) {
		console.log('Please enter a numerical value.');
	}

	if (stockPrice <= stopLoss) {
		console.log('Your stop loss cannot be greater than the stock price.');
	}
}
