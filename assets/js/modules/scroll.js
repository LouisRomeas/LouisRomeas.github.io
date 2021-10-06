function valueLimit(val, min, max) {
	return val < min ? min : (val > max ? max : val);
}

function scrollFunction(scrollValue) {
	const homeLink = document.querySelector('header .homeLink');
	const subtitle = document.querySelector('header .homeLink span');
	const nav = document.querySelector('header nav');
	const anchorTop = document.querySelector('.anchorTop');

	if (document.body.scrollTop > scrollValue || document.documentElement.scrollTop > scrollValue) {
		// What happens when scrolled down

		homeLink.style.fontSize = "3.5rem";
		subtitle.style.fontSize = "0";
		nav.style.fontSize = "0";
		anchorTop.style.opacity="1";
		anchorTop.style.pointerEvents="auto";

	} else {
		// What happens when scrolled back up

		homeLink.style.fontSize = "4.5rem";
		subtitle.style.fontSize = "1.25rem";
		nav.style.fontSize = "1.25rem";
		anchorTop.style.opacity="0";
		anchorTop.style.pointerEvents="none";
	}
		
}


export default scrollFunction;