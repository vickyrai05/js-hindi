const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function (item) {
console.log(item)
    item.addEventListener("click", function (e) {
      
        console.log(e.target); 

         
        // if (e.target.id === "red") {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === "green") {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === "blue") {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === "yellow") {
        //     body.style.backgroundColor = e.target.id;
        // }


        switch (e.target.id) {
            case "red":
                body.style.backgroundColor = e.target.id;
                break;
            case "green":
                body.style.backgroundColor = e.target.id;
                break;
            case"blue":
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id;
                break;

            default:
                break;
        }
    })
})
