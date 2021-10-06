function valueLimit(val, min, max) {
	return val < min ? min : (val > max ? max : val);
}

function scrollFunction(scrollValue) {
	let scrolled = Math.floor(document.documentElement.scrollTop);

	// if (document.body.scrollTop > scrollValue || document.documentElement.scrollTop > scrollValue) {
	// 	// What happens when scrolled down

	// 	document.querySelector('header .homeLink').style.fontSize = "3.5rem";

	// 	document.querySelector('header .homeLink span').style.fontSize = "0";

	// } else {
	// 	// What happens when scrolled back up

	// 	document.querySelector('header .homeLink').style.fontSize = "4.5rem";

	// 	document.querySelector('header .homeLink span').style.fontSize = "1.25rem";
		
	// }
	console.log(`${(scrolled / scrollValue) * 100}% scrolled !`)

	document.querySelector('header .homeLink').style.fontSize = `${valueLimit(1-(scrolled / scrollValue), 0, 1) + 3.5}rem`;

	document.querySelector('header .homeLink span').style.fontSize = `${Math.round(scrolled / scrollValue) * 1.25}rem`;
		
}


export default scrollFunction;