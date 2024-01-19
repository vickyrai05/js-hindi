

function makefunc() {
    const name = "Mirza";

    function displayName() {
        console.log(name);
    }

    return displayName();

}

const myFunc = makefunc();

myFunc();


