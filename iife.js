//immediate invoked function expression 

(function one(){
    console.log(`db Connected`)
})();

( (name)=>{
    console.log(`${name} Db connected two`)
})("vicky") 