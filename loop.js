// for loop 

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (i==5) {
//         console.log("5 is best Number")

//     }

//     console.log(element);

// }


// tables 
// for (let i = 1; i < 3; i++) {

//     console.log(`outer loop ${i}`);

//     for (let j = 1; j <= 10; j++) {
//         // console.log(`outer loop ${j} and outer loop ${i}`);

//         console.log(i + "*" + j + '=' + i * j)
//     }

// }


const MyArray = ["BAtman", "Superman", "Venom"]

//console.log(MyArray.length);

for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    // console.log(element)
}

// break and continue

// for (let index = 1; index <= 20; index++) {
    
// if(index==5){
//     console.log("5 is detected");
//     break;
// }

//     console.log(`value of index ${index}`)
// }

for (let index = 1; index <= 20; index++) {
    
    if(index==5){
        console.log("5 is detected");
        continue;
    }
    
        console.log(`value of index ${index}`)
    
    }