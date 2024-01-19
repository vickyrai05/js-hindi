const user = {
    username: "vicky",
    price: 22,

    welcomeWebsite: function () {
        console.log(`${this.username}   welcome My Website`);
        console.log(this)
    }


}

//  user.welcomeWebsite();
//  user.username="rai-sahab"
//  user.welcomeWebsite();

// console.log(this);

// function cold(){
//     console.log(this);
// }
// cold();

// const add = (num1,num2) => {
//     return num1 + num2  // agar curli bracket lagaaya hai toh return kryword likhna hoga
// }
// console.log(add(5,5))

// const add = (num1,num2) => (num1+ num2)

// console.log(add(4,8))

const add = (num1,num2) => ({username:"vicky"})

console.log(add(4,8))