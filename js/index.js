// hårdkodad nyckel -> solaris-KwOi5vm2TYNmi8Dd

// initialt kalla på funktionen som hämtar från api'et
fetchSolarSystem();

// hämtar all data från api'et
async function fetchSolarSystem() {
    let resp = await fetch('https://fathomless-shelf-54969.herokuapp.com/bodies', {
        method: 'GET',
        headers: { 'x-zocom': 'solaris-7BTxHCyHhzIME5TI' }
    }).then(data => data.json());
    console.log(await resp);
    renderPlanets(resp.bodies);
};

// tar all data från api'et och skapar nya element där varje planet kan ligga i
function renderPlanets(planets) {
    const planetsContainer = document.querySelector('.inner-module');
    planets.forEach(planet => {
        // skapar elementet, men lägger inte in den ännu
        let img = document.createElement('img');
        img.setAttribute('src', `../assets/${planet.id}.svg`);
        if (planet.id !== 0) { img.setAttribute('class', 'body planet'); } else { img.setAttribute('class', 'body sun'); }
        // sätter unikt id efter planetens eget id
        img.setAttribute('id', planet.id);

        // sätta en eventlyssnare på varje planets bild
        img.addEventListener('click', () => goToPlanet(planet));

        // lägger in det nya elementet på sidan
        planetsContainer.appendChild(img);


        // om man vill ha text på med
        //let planetContainer = document.createElement('article');
        // planetContainer.innerHTML = `<p>${planet.name}</p>`
        // planetsContainer.appendChild(planetContainer);
    });
}

function goToPlanet(planet) {
    console.log(planet);
    localStorage.setItem('planet', JSON.stringify(planet));
    location.href = "bodypage.html";
}
