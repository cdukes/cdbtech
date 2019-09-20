/* globals ga */

(function() {
	let els = document.getElementsByClassName(`accordion`);
	if (els.length === 0) {
		return;
	}

	function toggle(e) {
		e.preventDefault();
		e.currentTarget.parentNode.classList.toggle(`open`);

		if (!e.currentTarget.parentNode.classList.contains(`open`)) {
			return;
		}

		if (`function` === typeof ga) {
			ga(
				`send`,
				`event`,
				`FAQ`,
				`Open`,
				e.currentTarget.querySelector(`a`).textContent
			);
		}
	}

	for (let i = 0; i < els.length; i++) {
		els[i]
			.querySelector(`.accordion-heading`)
			.addEventListener(`click`, toggle);
	}
})();
