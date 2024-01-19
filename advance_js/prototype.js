function User(username, score) {
    this.username = username;
    this.score = score;
}

User.prototype.increment = function () {
    this.score++;
};

User.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
};

const chai = new User("vicky", 12);
const student = new User("rai", 33);

chai.printMe();
student.printMe();

const userObject = {
    name: "vicky",
    email: "vickyrai@gmail.com",
};

const teacher = {
    makeVideo: false,
};

const TeachingSupport = {
    isAvailable: false,
};

const TAsupport = {
    makeAssistant: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport,
};

teacher.__proto__ = userObject;

Object.setPrototypeOf(TeachingSupport, teacher);

let anotherUsername = 'vickyrai';

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);
};

anotherUsername.trueLength()
"hitesh".trueLength()
"vicky".trueLength()