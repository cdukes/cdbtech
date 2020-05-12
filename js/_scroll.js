/* globals ga */

import SmoothScroll from 'smooth-scroll';

(function() {
	new SmoothScroll(`a[data-scroll]`);
})();

(function() {
	// Setup global vars
	const nav_el = document.getElementById(`site-navigation`),
		target_els = {};

	let lastScrollY = 0,
		ticking = false;

	if (!nav_el) {
		return;
	}

	const nav_els = nav_el.getElementsByTagName(`a`);
	if (nav_els.length === 0) {
		return;
	}

	function trigger_pageview(slug) {
		if (typeof ga !== `function`) {
			return;
		}

		ga(`set`, `page`, `/${slug}`);
		ga(`send`, `pageview`);
	}

	function init() {
		for (let i = 0; i < nav_els.length; i++) {
			const target_el = document.getElementById(nav_els[i].dataset.section);
			if (target_el) {
				target_els[nav_els[i].dataset.section] = target_el;
			}
		}

		update_affix();
	}

	function update_affix() {
		let active_el = false;

		for (let i = 0; i < nav_els.length; i++) {
			if( !target_els.hasOwnProperty(nav_els[i].dataset.section) ) {
				continue;
			}

			if (target_els[nav_els[i].dataset.section].offsetTop > lastScrollY) {
				break;
			}

			active_el = nav_els[i];
		}

		if (active_el) {
			if (!active_el.classList.contains(`current`)) {
				for (let i = 0; i < nav_els.length; i++) {
					nav_els[i].classList.remove(`current`);
				}
				active_el.classList.add(`current`);
				trigger_pageview(active_el.dataset.section);
			}
		} else {
			for (let i = 0; i < nav_els.length; i++) {
				nav_els[i].classList.remove(`current`);
			}
		}

		ticking = false;
	}

	function request_tick() {
		if (ticking) {
			return;
		}

		window.requestAnimationFrame(update_affix);
		ticking = true;
	}

	function on_scroll() {
		lastScrollY = window.pageYOffset;
		request_tick();
	}

	init();
	window.addEventListener(`scroll`, on_scroll);
	window.addEventListener(`resize`, init);
})();
