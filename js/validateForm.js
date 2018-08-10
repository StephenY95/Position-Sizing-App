var validForm = false;

$(function() {
	$('#calculator, #header')
		.hide()
		.fadeIn(1000);

	// portfolio size check
	$('#portfolioSize').blur(function() {
		if ($('#portfolioSize') <= 0 || (portfolioSize = '')) {
			window.alert('Please enter a positive value.');
			return (validForm = false);
		} else if (isNaN($('#portfolioSize'))) {
			window.alert('Please enter a numerical value.');
			return (validForm = false);
		} else {
			return (validForm = true);
		}
	});
	// allocated risk check
	$('#VaR').blur(function() {
		if (($('#VaR') <= 0) | ($('#VaR') > 100)) {
			window.alert('Please enter a numerical value between 0 and 100.');
			return (validForm = false);
		} else if (isNaN($('#VaR'))) {
			window.alert('Please enter a numerical value.');
			return (validForm = false);
		} else {
			return (validForm = true);
		}
	});
	// stock price check
	$('#stockPrice').blur(function() {
		if ($('#stockPrice') <= 0) {
			window.alert('Please enter a stock stock value above $0');
			return (validForm = false);
		} else if (isNaN($('#stockPrice'))) {
			window.alert('Please enter a numerical value.');
			return (validForm = false);
		} else {
			return (validForm = true);
		}
	});
	// stop loss check
	$('#stopLoss').blur(function() {
		if ($('#stopLoss') <= 0) {
			window.alert('Please enter a stock stock value above $0');
			return (validForm = false);
		} else if (isNaN($('#stopLoss'))) {
			window.alert('Please enter a numerical value.');
			return (validForm = false);
		} else if ($('#stockPrice') <= $('#stopLoss')) {
			window.alert(
				'Your stop loss cannot be greater than the stock price.'
			);
			return (validForm = false);
		} else {
			return (validForm = true);
		}
	});
});
