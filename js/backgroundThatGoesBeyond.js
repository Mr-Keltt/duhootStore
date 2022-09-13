// link: <script src="js/backgroundThatGoesBeyond.js"></script>

function backgroundControl(target, targetBackground) {
	targetBackground.css({
		'height':
			parseInt(target.height()) +
			parseInt(target.css("padding-top")) +
			parseInt(target.css("padding-bottom")) +
			"px",
		'top': target.offset().top,
	});
}