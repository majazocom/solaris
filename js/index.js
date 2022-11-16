// hårdkodad nyckel -> solaris-KwOi5vm2TYNmi8Dd

// initialt kalla på funktionen som hämtar från api'et
renderPlanets();

// hämtar all data från api'et
async function fetchSolarSystem() {
    let resp = await fetch('https://fathomless-shelf-54969.herokuapp.com/bodies', {
        method: 'GET',
        headers: { 'x-zocom': 'solaris-7BTxHCyHhzIME5TI' }
    }).then(data => data.json());
    console.log(await resp);
    return await resp.bodies;
};

// tar all data från api'et och skapar nya element där varje planet kan ligga i
async function renderPlanets() {
    const bodies = await fetchSolarSystem();
    // lägga in alla himlakroppar i localhost
    localStorage.setItem('bodies', JSON.stringify(bodies));
    const planetsContainer = document.querySelector('.inner-module');
    bodies.forEach(body => {
        // skapar elementet, men lägger inte in den ännu
        let img = document.createElement('img');
        img.setAttribute('src', `../assets/${body.id}.svg`);
        if (body.id !== 0) { img.setAttribute('class', 'body planet'); } else { img.setAttribute('class', 'body sun'); }
        // sätter unikt id efter planetens eget id
        img.setAttribute('id', body.id);

        // sätta en eventlyssnare på varje planets bild
        img.addEventListener('click', () => goToPlanet(body));

        // lägger in det nya elementet på sidan
        planetsContainer.appendChild(img);


        // om man vill ha text på med
        //let planetContainer = document.createElement('article');
        // planetContainer.innerHTML = `<p>${planet.name}</p>`
        // planetsContainer.appendChild(planetContainer);
    });
}

// funktion för att byta sida och sätta rätt planet i localstorage
function goToPlanet(body) {
    console.log(body);
    localStorage.setItem('body', JSON.stringify(body));
    location.href = "bodypage.html";
}

// sökfunktionen
document.querySelector('#search-input').addEventListener('keyup', async function (event) {
    if (event.key === "Enter") {
        searchTerm = document.querySelector('#search-input').value.toLowerCase();
        let bodies = await fetchSolarSystem();
        bodies.forEach(body => {
            let latinName = body.latinName.toLowerCase();
            let name = body.name.toLowerCase();
            if (name.includes(searchTerm) || latinName.includes(searchTerm)) {
                window.localStorage.setItem('body', JSON.stringify(body));
                window.location.href = "bodypage.html";
            }
        });
    }
});
