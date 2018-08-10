// This JS file is used to do the calculations for the position size
validForm = true;

// HELPER FUNCTION (Rounding)
function RoundNum(num, length) {
	var number = Math.round(num * Math.pow(10, length)) / Math.pow(10, length);
	return number;
}
// HELPER FUNCTION (Adding commas to big numbers)
function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// FORM VALIDATION
// function checkPortfolioSize() {
// 	var portfolioSize = parseFloat(
// 		document.getElementById('portfolioSize').value
// 	);
//
// 	if (portfolioSize <= 0 || (portfolioSize = '')) {
// 		window.alert('Please enter a positive value.');
// 		return (validForm = false);
// 	} else if (isNaN(portfolioSize)) {
// 		window.alert('Please enter a numerical value.');
// 		return (validForm = false);
// 	} else {
// 		return (validForm = true);
// 	}
// }
//
// function checkVaR() {
// 	var VaR = parseFloat(document.getElementById('VaR').value) / 100;
//
// 	if ((VaR <= 0) | (VaR > 100)) {
// 		window.alert('Please enter a numerical value between 0 and 100.');
// 		return (validForm = false);
// 	} else if (isNaN(VaR)) {
// 		window.alert('Please enter a numerical value.');
// 		return (validForm = false);
// 	} else {
// 		return (validForm = true);
// 	}
// }
//
// function checkStockPrice() {
// 	var stockPrice = parseFloat(document.getElementById('stockPrice').value);
//
// 	if (stockPrice <= 0) {
// 		window.alert('Please enter a stock stock value above $0');
// 		return (validForm = false);
// 	} else if (isNaN(stockPrice)) {
// 		window.alert('Please enter a numerical value.');
// 		return (validForm = false);
// 	} else {
// 		return (validForm = true);
// 	}
// }
//
// function checkStopLoss() {
// 	var stopLoss = parseFloat(document.getElementById('stopLoss').value);
// 	var stockPrice = parseFloat(document.getElementById('stockPrice').value);
//
// 	if (stopLoss <= 0) {
// 		window.alert('Please enter a stock stock value above $0');
// 		return (validForm = false);
// 	} else if (isNaN(stopLoss)) {
// 		window.alert('Please enter a numerical value.');
// 		return (validForm = false);
// 	} else if (stockPrice <= stopLoss) {
// 		window.alert('Your stop loss cannot be greater than the stock price.');
// 		return (validForm = false);
// 	} else {
// 		return (validForm = true);
// 	}
// }

// Calculates position size required and displays messages
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

	// Check for valid form and high exposure
	if (validForm == true && exposure <= portfolioSize) {
		// Displays message and calculated position size
		document.getElementById('message1').innerHTML =
			'Based on a portfolio size of $' +
			numberWithCommas(portfolioSize) +
			', your recommended number of stocks to purchase is ' +
			numberWithCommas(posSize) +
			'.';
		document.getElementById('message2').innerHTML =
			'Your exposure in this trade will be $' +
			numberWithCommas(exposure) +
			' or ' +
			numberWithCommas(exposurePcnt) +
			'%' +
			' of your portfolio, and your risk capital (your maximum loss) in this trade will be $' +
			numberWithCommas(riskCapital) +
			' or ' +
			numberWithCommas(riskCapitalPcnt) +
			'% of your portfolio.';
		$('#message1, #message2').fadeIn(500);
	} else if (exposure => portfolioSize) {
		document.getElementById('message1').innerHTML =
			'Your current exposure level is greater than your portfolio size. Please reduce your allocated risk level or use a stop loss closer to your stock price.';
		document.getElementById('message2').style.display = 'none';
	} else {
		document.getElementById('message1').style.display = 'none';
		document.getElementById('message2').style.display = 'none';
	}
}
