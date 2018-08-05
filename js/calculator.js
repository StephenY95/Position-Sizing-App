// This JS file is used to do the calculations for the position size

// Calculates position size required
function calculatePosSize() {
	// Declare variables
	var portfolioSize = parseFloat(
		document.getElementById('portfolioSize').value
	);
	var VaR = parseFloat(document.getElementById('VaR').value);
	var stockPrice = parseFloat(document.getElementById('stockPrice').value);
	var stopLoss = parseFloat(document.getElementById('stopLoss').value);
	var posSize = Math.round((portfolioSize * VaR) / (stockPrice - stopLoss));
	var exposure = Math.round(stockPrice * posSize).toFixed(2);
	var exposurePcnt = Math.round((exposure / portfolioSize) * 100);
	var riskCapital = Math.round(posSize * (stockPrice - stopLoss)).toFixed(2);

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
		', and your risk capital (your maximum loss) on this trade will be $' +
		riskCapital +
		'.';
	document.getElementById('message1').style.display = 'block';
	document.getElementById('message2').style.display = 'block';
}
