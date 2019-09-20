(function() {
	let button_el = document.getElementById(`toggle-nav-menu`);

	if (!button_el) {
		return;
	}

	function toggle() {
		document.body.classList.toggle(`menu-open`);
	}

	button_el.addEventListener(`click`, toggle);
})();

(function() {
	let container_el = document.getElementById(`site-navigation`);
	if (!container_el) {
		return;
	}

	let link_els = container_el.getElementsByTagName(`a`);
	if (link_els.length === 0) {
		return;
	}

	function toggle() {
		document.body.classList.remove(`menu-open`);
	}

	for (let i = 0; i < link_els.length; i++) {
		link_els[i].addEventListener(`click`, toggle);
	}
})();
