 function setUsername(username) {
    this.username = username
}

function code(username,email,password) {
   
    setUsername.call  (this,username)

    this.email = email
    this.password = password

}

const user = new code("vicky","vickyrai@gmail","vicky@123")
console.log(user)