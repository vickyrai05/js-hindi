const marvel_heroes = ["thor", 'Ironmen', "spidermen"]

const dc = ["superman", 'flash', 'batmen']


// const all= marvel_heroes.concat(dc)

const all = [...marvel_heroes, ...dc]

const number = [1, 2, 3, [5, 6, [7, 8, 9]]]

const number1 = number.flat(2);


const one = ["vicky"]
console.log(Array.isArray(one));

const Two = "Vicky";
const fins = Array.from(Two).map(item => item.toUpperCase())

console.log(fins); // Output: 'VICKY'

console.log(Array.from({ name: "Vicky" }));//imteresting

let score1 = 78;
let score2 = 888;
let score3 = 4458;

console.log(Array.of(score1,score2,score3));
