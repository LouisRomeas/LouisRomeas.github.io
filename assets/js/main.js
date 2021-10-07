import scrollFunction from './modules/scroll.js';

window.onscroll = function() {scrollFunction(25)};

particlesJS.load('particles-js', '/assets/js/particles.json');

const searchBox = document.querySelector('#searchBox');
const searchGo = document.querySelector('#searchGo');

async function searchFor(terms) {
    fetch(`https://apimaker.alwaysdata.net/api/?host=mysql-apimaker.alwaysdata.net&db=apimaker_mess&table=menus_cantine&user=apimaker_reader&pwd=D4t4p1!&query=SELECT * FROM menus_cantine WHERE menuNomPlat LIKE '%${terms}%'`)
        .then(res => res.json())
        .then((data) => {

            // Remove column names
            data.shift();

            const section = document.querySelector('#content');

            section.innerHTML = null;

            section.innerHTML += `<h2>${data.length} résultats trouvés</h2>`;

            for (const row of data) {
                if (row.menuNomPlat) {
                    section.innerHTML += `
                                <article id="art-${row.id}">
                                    <h3 style="margin-bottom:0">${row.menuNomPlat}</h3>
                                    <p style="margin-top: 0">${row.menuTypePlat}</p>
                                </article>
                            `
                }           
            }
            
        });
}

searchGo.addEventListener('click', () => {
    if (searchBox.value) {
        searchFor(searchBox.value);
    }
});

searchBox.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        searchGo.click();
    }
})


