// This JS file is used to do the calculations for the position size

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
	var VaR = parseFloat(document.getElementById('VaR').value);
	var stockPrice = parseFloat(document.getElementById('stockPrice').value);
	var stopLoss = parseFloat(document.getElementById('stopLoss').value);
	var posSize = RoundNum((portfolioSize * VaR) / (stockPrice - stopLoss), 0);
	var exposure = RoundNum(stockPrice * posSize, 3);
	var exposurePcnt = RoundNum((exposure / portfolioSize) * 100, 3);
	var riskCapital = RoundNum(posSize * (stockPrice - stopLoss), 3);

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
		'.';
	document.getElementById('message1').style.display = 'block';
	document.getElementById('message2').style.display = 'block';
}
