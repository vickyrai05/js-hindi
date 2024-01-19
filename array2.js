const marvel_heroes = ["thor", 'Ironmen', "spidermen"]

const dc = ["superman", 'flash', 'batmen']


// const all= marvel_heroes.concat(dc)

 const all = [...marvel_heroes,...dc]

   const number =[1,2,3,[5,6,[7,8,9]]]

   const number1=number.flat(2);


    
console.log(Array.isArray('Vicky'));

console.log(Array.from('Vicky'));

console.log(Array.from({name:"Vicky"}));