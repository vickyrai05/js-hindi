//["","",""]

//[{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greeting = 'Hello World';

for (const greet of greeting) {
    //  console.log(`each char is ${greet}`);
}



//Map
const map = new Map()

map.set('IN', "India")
map.set("USA", "America")
map.set("Fr", "France")

//console.log(map);

for (const [key, value] of map) {
    //console.log(key, ":-", value);
}

const MyObject = {
    js: "JAvascript",
    Cpp: "C++",
    rb: "ruby",
    fb: "React"
}
for (const key in MyObject) {
    // console.log(MyObject[key]);
    //  console.log(`${key}  shortcut is of ${MyObject[key]}`);

}

const map1 = new Map()

map.set('IN', "India")
map.set("USA", "America")
map.set("Fr", "France")

for (const key in map1) {
    console.log(key)

}

const coding = ["Js", 'ruby', 'java', 'react', 'Cpp']

// coding.forEach(function(val){  //call function call hua hai yaha
//     console.log(val)
// })

// coding.forEach( (item)=>{
//     console.log(item)
// })


// function printme(item){
//   console.log(item);
// }

//  coding.forEach(printme);


// coding.forEach((item, index, array) => {
//     console.log(item, index,array);
// })


const myCoding = [
    {
        languageName: "JavaScript",
        languagefileName: "js"
    },
    {
        languageName: "java",
        languagefileName: "java",
    },
    {
        languageName: "React",
        languagefileName: "Recat",
    },
]

myCoding.forEach( (item)=>{
 console.log(item.languageName)
 
})