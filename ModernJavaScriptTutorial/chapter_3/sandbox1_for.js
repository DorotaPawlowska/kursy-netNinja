// for loops


for(let i = 0; i < 5; i++){
    console.log('in loop: ' ,i);
}

console.log('loop finished');

const names = ['shaun','mario','luigi'];

for(let j = 0; j < names.length; j++){
    // console.log(names[j]);
    // console.log(j);
    let html = `<div>${names[j]}</div>`;
    console.log(html);
}