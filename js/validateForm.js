// VALIDATION OF INPUTS AND DISPLAYS ERROR MESSAGES
// LOADING SCREEN
$(function() {
	$('#calculator, #header')
		.hide()
		.fadeIn(1000);
});
$(function() {
	// PORTFOLIO SIZE CHECK
	$('#portfolioSize').on('input', function() {
		var input = $(this);
		var inputPortfolioSize = input.val();
		if (inputPortfolioSize < 0) {
			$('#message1')
				.html('Please enter a positive portfolio value.')
				.show();
		} else if (isNaN(inputPortfolioSize)) {
			$('#message1')
				.html('Please enter a proper portfolio size number.')
				.show();
		} else {
			$('#message1').hide();
		}
	});
	// ALLOCATED RISK CHECK
	$('#VaR').on('input', function() {
		var input = $(this);
		var inputVaR = input.val();
		if (inputVaR < 0 || inputVaR > 100) {
			$('#message1')
				.html('Please enter an allocated risk between 1-100.')
				.show();
		} else if (isNaN(inputVaR)) {
			$('#message1')
				.html('Please enter a proper allocated risk number.')
				.show();
		} else {
			$('#message1').hide();
		}
	});
	// STOCK PRICE CHECK
	$('#stockPrice').on('input', function() {
		var input = $(this);
		var inputStockPrice = input.val();
		if (inputStockPrice < 0) {
			$('#message1')
				.html('Please enter a stock price value above $0.')
				.show();
		} else if (isNaN(inputStockPrice)) {
			$('#message1')
				.html('Please enter a proper stock price.')
				.show();
		} else {
			$('#message1').hide();
		}
	});
	// STOP LOSS CHECK
	$('#stopLoss').on('input', function() {
		var input = $(this);
		var inputStopLoss = input.val();
		if (inputStopLoss < 0) {
			$('#message1')
				.html('Please enter a stock price value above $0.')
				.show();
		} else if (isNaN(inputStopLoss)) {
			$('#message1')
				.html('Please enter a proper stock price.')
				.show();
		} else if ($('#stockPrice') <= inputStopLoss) {
			$('#message1')
				.html('Your stop loss cannot be greater than the stock price.')
				.show();
		} else {
			$('#message1').hide();
		}
	});
});
