/* globals ga */

( function() {
	const el = document.querySelector( `.home-section-testimonials .btn` );

	if ( !el ) {
		return;
	}

	function open() {
		document.querySelector( `.home-section-testimonials` ).classList.add( `open` );

		if ( typeof ga === `function` ) {
			ga( `send`, `event`, `Testimonials`, `Click`, `View More` );
		}
	}

	el.addEventListener( `click`, open );
} )();
