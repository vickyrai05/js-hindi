const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("promise one");
        resolve();
    }, 1000)
})

promiseOne.then(function () {
    console.log("promise one resolved");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("promise two");
        resolve();
    }, 1000)
}).then(function () {
    console.log("promise two resolved")
})

const promiseThird = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("promise three");
        resolve({ username: "vicky", email: "vicky@123gmail.com" });
    }, 1000)
})

promiseThird.then(function (user) {
    console.log(user)
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (error === true) {
            console.log("PromiseFOUR")
            resolve({ username: "vicky", email: "vicky@123gmail.com" })
        } else {
            console.log("something went Wrong")
        }
    }, 1000)
})

promiseFour.then(function (user) {
    console.log(user)
    return user.email
}).then((email) => {
    console.log(email);
}).catch(function (error) {
    console.log("some problem");
}).finally(function () {
    console.log("The promise is either resolvr or rejected");
})

const promisefive = new Promise(function (resolve, reject) {
    setTimeout(function () {

        let error = false
        if (!error) {

            resolve({ username: "vicky", Password: "005063" })
        } else {
            reject("something went wrong")
        }
    }, 1000)
})

async function consumepromise() {
    try {
        const response = await promisefive
        console.log(response)
    } catch (error) {
        console.log(error)

    }
}

consumepromise()

async function getAlluer() {
    try {
        const response = await fetch("https://api.github.com/users/hiteshchoudhary")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error:", error)
    }
}

getAlluer();

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response)=>{
      return response.json()
})
.then((data)=>{
  console.log(data)
})
.catch((error)=>{
    console.log(error)
})