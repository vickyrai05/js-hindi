class aiUser {
    constructor(email, password) {
        this.email = email,
            this.password = password
    }
    get password() {
        return this._password.toUpperCase()
    }
    set password(value) {
         this._password = value
    }

}


const user = new aiUser("samAlmenAi", "Adgjhf1236")
//console.log(user.password )

//modren syntax

function car(password){
    this._password = password


Object.defineProperty(this,'password',{
    get : function(){
        return this._password.toUpperCase()
    },
    set: function(value){
       this._password = value
    }
})

}

const unique = new car("asdfgfh2365")

console.log(unique. password)