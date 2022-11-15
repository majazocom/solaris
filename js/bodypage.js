const body = JSON.parse(localStorage.getItem('body'));
const bodies = JSON.parse(localStorage.getItem('bodies'));
console.log(body);

document.querySelector('#body-name').innerHTML = body.name;
document.querySelector('#body-description').innerHTML = body.desc;
document.querySelector('#previous-body').addEventListener('click', () => toggleBody('previous'));
document.querySelector('#next-body').addEventListener('click', () => toggleBody('next'));

// funktionalitet för att gå mellan planeter på sidan
function toggleBody(direction) {
    let currentBodyID = body.id;
    if (direction === 'previous') {
        // gå till planeten innan i solsystemet
        let previousBody;
        if (currentBodyID === 1) {
            // om id är 1 så är det solen och då finns det ingen innan den
            // då får planeten innan bli den sista i solsystemet istället
            previousBody = bodies.length;
        } else {
            previousBody = currentBodyID - 1;
        }
        localStorage.setItem('body', JSON.stringify(bodies[previousBody]));
        location.reload();
    } else {
        // gå till nästa planet i solsystemet
        let nextBody;
        if (currentBodyID === bodies.length) {
            // om det är sista planeten i solsystemet
            // skall vi gå till första istället AKA solen
            nextBody = 0;
        } else {
            nextBody = currentBodyID + 1;
        }
        localStorage.setItem('body', JSON.stringify(bodies[nextBody]));
        location.reload();
    }
}