// link: <script src="js/burgerMenuControl.js"></script>

function burgerMenuControl(ul, li, row, windowWidthForActive, mt, id) {
	function active() {
		let windowWidth = $(window).width();

		if (windowWidth <= windowWidthForActive) {
			row.after(ul);
			burger.css({ 'display': 'flex' });
			ul.addClass('burger-menu');
			burgerActive = false;
			on = false;
		} else {
			burger.after(ul);
			burger.hide();
			ul.removeClass('burger-menu');
			burgerActive = false;
			on = false;
		}
	}
	
	let burgerActive = false;
	let on = false;

	ul.before($(`
		<div class="burger-${id} burger">
			<div class="burger-line-1"></div>
			<div class="burger-line-2"></div>
			<div class="burger-line-3"></div>
		</div>
	`));

	let burger = $(`.burger-${id}`);

	burger.on('click', (e) => {
		if (burgerActive) {
			burgerActive = false;
		} else {
			burgerActive = true;
		}
	});


	active();

	$(window).resize(() => {
		active();
	})

	setInterval(() => {
		let ulHeight = (parseInt(li.height()) + parseInt(li.css('padding-top')) + parseInt(li.css('padding-bottom')) + parseInt(li.css('margin-top')) + parseInt(li.css('margin-bottom'))) * li.length;
		let windowWidth = $(window).width();

		if (windowWidth <= windowWidthForActive) {
			if ($(window).height() >= ulHeight) {
				ul.height(ulHeight)
			} else {
				ul.height($(window).height() - row.height())
				console.log($(window).height())
			}
		} else {
			ul.height('auto');
		}

		if (burgerActive) {
			if (on) {
				burger.addClass('burger-active');
				burger.removeClass('burger');
				if (mt) {
					ul.animate({ 'top': parseInt(row.height()) + parseInt(row.css('padding-top')) + parseInt(row.css('padding-bottom')) + parseInt(row.css('margin-top')) }, 500)
					$('body').css({ 'overflow-y': 'hidden' })
				} else {
					ul.animate({ 'top': 0 });
					ul.css({ 'overflow-y': 'hidden' })
				}

				on = false;
			}
		} else {
			if (!on) {
				burger.addClass('burger');
				burger.removeClass('burger-active');
				ul.animate({ 'top': -(parseInt(row.height()) + parseInt(row.css('padding-top')) + parseInt(row.css('padding-bottom')) + parseInt(row.css('margin-top')) + parseInt(ul.height()) + parseInt(ul.css('padding-top')) + parseInt(ul.css('padding-bottom')) + parseInt(ul.css('margin-top'))) }, 500)
				$('body').css({ 'overflow-y': 'auto' })

				on = true;
			}
		}
	}, 0)
}