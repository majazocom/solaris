const body = JSON.parse(localStorage.getItem('body'));
const bodies = JSON.parse(localStorage.getItem('bodies'));
console.log(body);

// släng in data i olika element i html'en
document.querySelector('#body-name').innerHTML = body.name;
document.querySelector('#body-latin-name').innerHTML = body.latinName;
document.querySelector('#body-description').innerHTML = body.desc;
document.querySelector('.circumference').innerText = body.circumference + ' km';
document.querySelector('.distance').innerText = body.distance + ' km';
document.querySelector('.temp-day').innerText = body.temp.day + ' °C';
document.querySelector('.temp-night').innerText = body.temp.night + ' °C';
document.querySelector('.orbital-period').innerText = body.orbitalPeriod  + ' dagar';
document.querySelector('.rotation').innerText = body.rotation + ' dagar';

// funktionalitet för att gå mellan planeter på sidan
document.querySelector('#previous-body').addEventListener('click', () => toggleBody('previous'));
document.querySelector('#next-body').addEventListener('click', () => toggleBody('next'));
function toggleBody(direction) {
    let currentBodyID = body.id;
    if (direction === 'previous') {
        // gå till planeten innan i solsystemet
        let previousBodyID;
        if (currentBodyID === 0) {
            // om id är 0 så är det solen och då finns det ingen innan den
            // då får planeten innan bli den sista i solsystemet istället
            previousBodyID = bodies.length - 1;
        } else {
            previousBodyID = currentBodyID - 1;
        }
        localStorage.setItem('body', JSON.stringify(bodies[previousBodyID]));
        location.reload();
    } else {
        // gå till nästa planet i solsystemet
        let nextBodyID;
        if (currentBodyID === bodies.length - 1) {
            // om det är sista planeten i solsystemet
            // skall vi gå till första istället AKA solen
            nextBodyID = 0;
        } else {
            nextBodyID = currentBodyID + 1;
        }
        localStorage.setItem('body', JSON.stringify(bodies[nextBodyID]));
        location.reload();
    }
}

// ändra färg på svg'n efter vilken planet man är på:
const image = document.getElementById('sun');
switch (body.name) {
    case "Merkurius":
        image.style.fill = '#888888';
        break;
    case "Venus":
        image.style.fill = '#E7CDCD';
        break;
    case "Jorden":
        image.style.fill = '#428ED4';
        break;
    case "Mars":
        image.style.fill = '#EF5F5F';
        break;
    case "Jupiter":
        image.style.fill = '#E29468';
        break;
    case "Saturnus":
        image.style.fill = '#C7AA72';
        break;
    case "Uranus":
        image.style.fill = '#C9D4F1';
        break;
    case "Neptunus":
        image.style.fill = '#7A91A7';
        break;
}