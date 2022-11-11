const body = JSON.parse(localStorage.getItem('body'));
console.log(body);

document.querySelector('#body-name').innerHTML = body.name;
document.querySelector('#body-description').innerHTML = body.desc;