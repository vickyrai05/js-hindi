//  < less than,
//  > greter than,
//  <= less than or eqaul
//  >= greter ess than or eqaul
// ==  equal to
// === equal to or check datatype
// != not equal
// 
// const temp = 45;

// if (temp === 45) {
//     console.log("less than 50")
// } else {
//     console.log("temp is greater than 50 ");

// }

// const score=200;

// if(score>100){

//     let  power="fly";
//     console.log(`user power : ${power}`);

// }

// console.log(`user power : ${power}`);

// const balance = 800;

// if (balance < 500) {
//     console.log("less than 500");

// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 900")

// } else {
//     console.log("less than 1200");
// }


// const userLoggedIn = true;
// const debitcard = true;

// const logintoGoogle = true;
// const logintoEmail = false;

// if (userLoggedIn && debitcard && 2 == 2) {
//     console.log("allow to Enter Course");
// }

// if(logintoEmail||logintoGoogle){
//     console.log('user logged In');
// }

// const month = 5;

// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("febrary");
//         break;

//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("May")
//         break;
//     default:
//         console.log("default case Matach")
// }

// const userEmail = [];

// if (userEmail) {
//     console.log("Email is valid")
// } else {
//     console.log("Email not found")
// }


// //array detect empty hai ki nahi
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// //object detect empty hai ki nahi

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//falsy values => false, 0, -0, BigInt 0n, null, undefined, NaN

//truely Values => "0","", "false", [], {}, function()

// nullish Coalescing Operator (??): null Undefined

// let val1;

// val1 = 5 ?? 10
// val1 = null ?? 15
// val1 = undefined ?? 13
// val1 = null ?? 10 ?? 20

// console.log(val1)

// ternary operator

// const icecreamPrice = 100;

// icecreamPrice <= 80 ? console.log("lesss than 80 "): console.log("more than 80");