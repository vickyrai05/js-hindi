const MyNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newnums = MyNumber.map((num) => {
    return num + 10
})
//console.log(newnums)

const newnum = MyNumber
    .map((num) => num * 10)
    .map((num) => num + 2)
    .filter((num) => num >= 40)
//console.log(newnum)


////=====================reduce mrthod==================

const number = [1, 2, 3]

// const total = number.reduce(function (acc, currval) {

//     console.log(`acc: ${acc}  and currval: ${currval }`)

//     return acc + currval

// },0)

const total = number.reduce((acc, currval) => acc + currval, 0)


//console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "Pathon course",
        price: 999
    }, {
        itemName: "react course",
        price: 5999
    }, {
        itemName: "Mobile-dev course",
        price: 10999
    }
]

const totalprice = shoppingCart.reduce((acc, item) => {

     
 console.log(`acc: ${acc} and item:  ${item.price}`);
 return acc + item.price
},0)
 

console.log(totalprice);