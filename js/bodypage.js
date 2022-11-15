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