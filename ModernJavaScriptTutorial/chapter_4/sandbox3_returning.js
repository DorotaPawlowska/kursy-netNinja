// returning values

// const speak = function(name = 'luigi', time = 'night'){
//     console.log(`good ${time} ${name}`);
// };

const calcArea = function(radius){
    return 3.14 * radius**2;
    // console.log(area);
    // return area;
};

const area = calcArea(5);
console.log(area);

const calcVol = function(area){
    return area+2;
};

console.log(calcVol(area));
