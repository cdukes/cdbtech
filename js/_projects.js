/* globals Vue */

import App from './projects/app.vue';

(function() {
	const app_el = document.getElementById(`projects-app`);

	if( !app_el ) {
		return;
	}

	if( typeof Vue !== `function` ) {
		return;
	}

	new Vue({
		el: app_el,
		render(helper) {
			return helper(App);
		}
	});
})();
