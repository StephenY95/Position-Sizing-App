// This JS file is used for form validation of the position size, VaR, stock price, stop loss, etc

function checkPortfolioSize() {
	var portfolioSize = parseFloat(
		document.getElementById('portfolioSize').value
	);

	if (isNaN(portfolioSize) || portfolioSize < 0) {
		document.getElementById('portfolioSize').innerHTML =
			'Please enter a positive Portfolio Size.';
	} else {
		document.getElementById('errorname').innerHTML = '-';
	}
}

function checkVaR() {
	var VaR = parseFloat(document.getElementById('VaR').value);
}
function checkStockPrice() {
	var stockPrice = parseFloat(document.getElementById('stockPrice').value);
}
function checkStopLoss() {
	var stopLoss = parseFloat(document.getElementById('stopLoss').value);
}
