// This JS file is used for form validation of the position size, VaR, stock price, stop loss, etc

function formValidation() {
	// DECLARE VARIABLES
	var portfolioSize = parseFloat(
		document.getElementById('portfolioSize').value
	);
	var VaR = parseFloat(document.getElementById('VaR').value);
	var stockPrice = parseFloat(document.getElementById('stockPrice').value);
	var stopLoss = parseFloat(document.getElementById('stopLoss').value);

	if (isNaN(portfolioSize) || portfolioSize < 0) {
		console.log('Not a valid input.');
	} else {
		console.log('This input is ok.');
	}
}
