class User{
    constructor(name){
        this.name=name    
    }

    LogMe(){
        console.log(`Uername is : ${this.name}`)
    }
}

class Teacher extends User{
    constructor(name,subject){
        super(name)
        this.subject=subject
    }

    addCourse(){
        console.log(`Subject is : ${this.subject}`)
    }
}

const code = new Teacher("vicky","JS")
code.LogMe()
code.addCourse()

class student{
    constructor(idname){
     this.idname =idname;
    }

  InLog(){
       console.log(`Name is : ${this.idname}`)
  }
  
    static creteId(){
       return `123564`
   }
}  

const vicky = new student("HarryPotter")
//   console.log(vicky.creteId())
//   vicky.InLog()

  class Mobile extends student{
    constructor(idname,email){
        super(idname)
         this.email=email;
    }
  }

  const iphone = new Mobile("Iphone","Iphone@Mobile.com")
  iphone.InLog()
  console.log(iphone)
