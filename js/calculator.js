// This JS file is used to conduct the calculations
$(document).ready(function() {
	// HELPER FUNCTION (Rounding)
	function RoundNum(num, length) {
		var number =
			Math.round(num * Math.pow(10, length)) / Math.pow(10, length);
		return number;
	}
	// HELPER FUNCTION (Adding commas to big numbers)
	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}
	// DECLARE VARIABLES
	// INPUT VARIABLES
	$('#calculate').click(function() {
		// Declare variables
		var portfolioSize = parseFloat(
			document.getElementById('portfolioSize').value
		);
		var VaR = parseFloat(document.getElementById('VaR').value) / 100;
		var stockPrice = parseFloat(
			document.getElementById('stockPrice').value
		);
		var stopLoss = parseFloat(document.getElementById('stopLoss').value);
		var posSize = RoundNum(
			(portfolioSize * VaR) / (stockPrice - stopLoss),
			0
		);
		var exposure = RoundNum(stockPrice * posSize, 2);
		var exposurePcnt = RoundNum((exposure / portfolioSize) * 100, 2);
		var riskCapital = RoundNum(posSize * (stockPrice - stopLoss), 2);
		var riskCapitalPcnt = RoundNum((riskCapital / portfolioSize) * 100, 2);

		// Check for valid form and high exposure
		if (exposure <= portfolioSize) {
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
	});
});
