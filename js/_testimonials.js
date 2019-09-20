/* globals ga */

(function() {
	let el = document.querySelector(`.home-section-testimonials .btn`);

	if (!el) {
		return;
	}

	function open() {
		document.querySelector(`.home-section-testimonials`).classList.add(`open`);

		if (`function` === typeof ga) {
			ga(`send`, `event`, `Testimonials`, `Click`, `View More`);
		}
	}

	el.addEventListener(`click`, open);
})();
