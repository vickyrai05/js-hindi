// const arr = [1,2,2,3,4,4,8,7,7,1]

// //const result = arr.filter((v,i,a) => a.indexOf(v) !== i)

// const result = new Set(arr)


// console.log(result)
 

// const  text = "vicky"
// //const result = text.split(" ").reverse().join(" ")

// const result = text.split("").reverse().join(" ")


// console.log(result);


const arr=[];
const text="vicky";
const arr1=[];

for(let i=0; i<text.length;i++){
arr.push(text[i]);
}
for(let i = arr.length-1; i>=0;i--){
   //console.log(arr[i])
   arr1.push(arr[i]);
}

//console.log(arr1);

// const arr = [100,200,300,400,500];

// for(let i=0;i<arr.length;i++){
//     let offer = arr[i]/10
//     arr[i]=arr[i]-offer;
//    console.log(arr[i])
// }
//  console.log(arr)
 

//how to create array
 const  data = [ 1,2,3,4,5,6,7,8,9,10]

  //console.log(data);
   

//read array 

   const priceofApple = [100,50,45,80,90];

  for(let values of priceofApple ){
    //console.log(values)
  }

//what is array;
  const array = ["vicky","rai","sachin","sunny","rohit"]
  console.log(array[1].toUpperCase().slice(1,2))

//why use aarray;
//where to use array
//how to access the array values
//how to change the array values
 const student = ["aniket","suraj","dev","jakky"];
  
 const name = student.splice(1,1,"don")
 console.log(name);

//how to add the array values
//how to delete the array values
//how to find the length of the array
//how to compare the array
//Array Iteration: