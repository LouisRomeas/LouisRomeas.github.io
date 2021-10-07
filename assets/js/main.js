import scrollFunction from './modules/scroll.js';

window.onscroll = function() {scrollFunction(25)};

particlesJS.load('particles-js', '/assets/js/particles.json');

fetch('https://apimaker.alwaysdata.net/api/?host=mysql-apimaker.alwaysdata.net&db=apimaker_mess&table=menus_cantine&user=apimaker_reader&pwd=D4t4p1!')
    .then(res => res.json())
    .then((data) => {
        console.log(data)
    });
