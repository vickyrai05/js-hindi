const user = {
    username: "vicky",
    email: "vicky@123gmail.com",
    password: "vicky@123",


    getuserdetails: function () {
        console.log("Got user details from database");
        console.log(`email : ${this.email}`)
    }
}



// console.log(user.username); 
// console.log(user.getuserdetails());

function one(username, password, isLoggedIn) {
    this.username = username;
    this.password = password;
    this.isLoggedIn = isLoggedIn;
     


      return this;
}

const user1 = new one("vicky", "vicky@123", true)
const user2 = new one("vickyrai", "vicky@506  5",false)
console.log(user1);
console.log(user2);