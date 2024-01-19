class user{
    constructor(name,email,password){
        this.name=name
        this.email=email
        this.password=password
    }

    getuser(){
      return `${this.password}`
    }

    getuserdetails(){
        console.log("Got user details from database")
        console.log(`email : ${this.email}`)
        console.log(`name : ${this.name.toUpperCase()}`)
    }
}

const student = new user("vicky","vickyrai@gmail","vicky@123")
 
console.log(student.getuser())

student.getuserdetails()

