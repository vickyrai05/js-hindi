const tinderUser = new Object()

//console.log(tinderUser); 


tinderUser.id = '005063'
tinderUser.name = 'vicky'
tinderUser.isloggedIn = false

//console.log(tinderUser);

const regularUser = {
  email: "vickyrai6766@gamil.com",

  username: {
    userfullname: {
      Fname: "Vicky",
      age: 22
    }
  }

}

//console.log(regularUser.username.userfullname.age);


const obj1 = { 1: "a", 2: "b" }

const obj2 = { 3: "c", 4: "d" }

//const obj3={obj1,obj2}

// const obj3= Object.assign({},obj1,obj2);

const obj3 = { ...obj1, ...obj2 }

//console.log(obj3);

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
 
// console.log(Object.values(tinderUser))

// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isloggedIn'))

const course = {
  coursename: "js in hindi",
  prize: "3000",
  student: "Vicky"
}

const { student : d} = course
console.log(d);