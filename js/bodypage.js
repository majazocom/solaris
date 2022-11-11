const planet = JSON.parse(localStorage.getItem('planet'));
console.log(planet);

document.querySelector('#body-name').innerHTML = planet.name;
document.querySelector('#body-description').innerHTML = planet.desc;