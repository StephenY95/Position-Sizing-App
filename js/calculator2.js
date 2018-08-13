// This JS file is used to conduct the calculations
// HELPER FUNCTION (Rounding)
function RoundNum(num, length) {
	var number = Math.round(num * Math.pow(10, length)) / Math.pow(10, length);
	return number;
}
// HELPER FUNCTION (Adding commas to big numbers)
function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

$(document).ready(function() {
	// DECLARE VARIABLES
	// INPUT VARIABLES
	var inputPortfolioSize = document.getElementById('portfolioSize');
	var inputVaR = $('#VaR');
	var inputStockPrice = $('#stockPrice');
	var inputStopLoss = $('#stopLoss');
	var message1 = document.getElementById('message1');
	// OUTPUT/CALCULATED VARIABLES
	var posSize = RoundNum(
		(inputPortfolioSize * inputVaR) / (inputStockPrice - inputStopLoss),
		0
	);
	var exposure = RoundNum(inputStockPrice * posSize, 2);
	var exposurePcnt = RoundNum((exposure / inputPortfolioSize) * 100, 2);
	var riskCapital = RoundNum(posSize * (inputStockPrice - inputStopLoss), 2);
	var riskCapitalPcnt = RoundNum((riskCapital / inputPortfolioSize) * 100, 2);
	function calculatePosSize() {}
	$('#calculate').click(function() {
		document.getElementById('message1').innerHTML =
			'Based on a portfolio size of $' +
			numberWithCommas(portfolioSize) +
			', your recommended number of stocks to purchase is ' +
			numberWithCommas(posSize) +
			'.';
		$('#message1').fadeIn(500);
	});

	// VALID FORM AND HIGH EXPOSURE CHECK
	$('#calculate').click(function() {
		if (exposure <= inputPortfolioSize) {
			$('#message1').html(
				'Based on a portfolio size of $' +
					numberWithCommas(inputPortfolioSize) +
					', your recommended number of stocks to purchase is ' +
					numberWithCommas(posSize) +
					'.'
			);
			$('message2').html(
				'Your exposure in this trade will be $' +
					numberWithCommas(exposure) +
					' or ' +
					numberWithCommas(exposurePcnt) +
					'%' +
					' of your portfolio, and your risk capital (your maximum loss) in this trade will be $' +
					numberWithCommas(riskCapital) +
					' or ' +
					numberWithCommas(riskCapitalPcnt) +
					'% of your portfolio.'
			);
		}
	});
});
