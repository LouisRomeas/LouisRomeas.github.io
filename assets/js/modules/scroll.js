function scrollFunction(scrollValue) {
		if (document.body.scrollTop > scrollValue || document.documentElement.scrollTop > scrollValue) {
			// What happens when scrolled down

			document.querySelector('header .homeLink').style.fontSize = "3.5rem";

			document.querySelector('header .homeLink span').style.fontSize = "0";

		} else {
			// What happens when scrolled back up

			document.querySelector('header .homeLink').style.fontSize = "4.5rem";

			document.querySelector('header .homeLink span').style.fontSize = "1.25rem";
			
		}
}

export default scrollFunction;