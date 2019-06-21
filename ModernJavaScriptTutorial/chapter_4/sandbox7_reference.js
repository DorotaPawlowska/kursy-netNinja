// get a reference to the 'ul'

const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
    // html template
    html += `<li style="color: purple">${person}</li>`;
});

ul.innerHTML = html;

console.log(html);