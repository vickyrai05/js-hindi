// function vicky() {
//     console.log("RAi")

// }
// vicky();

// function add(n1, n2) {

//     let result = n1 + n2
//     return result;

// }
// const result = add(4, 5);

// console.log(result);  

function loginMessage(username){

    if(!username){
    console.log('Plese Enter username')
    return
    }
   
    return `${username} just logged in`
}

// console.log(loginMessage("vicky"));
// console.log(loginMessage());

function calculateNumber(val,val2,...num1){
    return num1 
}

//console.log(calculateNumber(200,300,100,500));

// const user={
//     username:"vicky",
//     price:399
// }

function student(anyobject){
    console.log(`username is ${anyobject.username} price is ${anyobject.price}`);
}

//student(user);

const myNewarray=[100,200,3000,500]

function getArray(value){
    return value[2]
}

console.log(getArray(myNewarray));