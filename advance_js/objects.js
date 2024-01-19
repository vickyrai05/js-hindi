const value = Object.getOwnPropertyDescriptor(Math, "PI")

//console.log(value)

const day = {
    name: "CAp",
    price: 300,
    IsAvialable: true
}

console.log(Object.getOwnPropertyDescriptor(day,"name"));

Object.defineProperty(day, 'name', {
    //writable: false,
    enumerable: true
})


console.log(Object.getOwnPropertyDescriptor(day, 'name'));

 for (let [key,value] of Object.entries(day)){
    if (typeof value !== 'function') {
     
        console.log(`${key} : ${value}`)
    
    }
   
 }