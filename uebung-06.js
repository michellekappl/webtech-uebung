let arraytest = ['JavaScript', 'Python', 'Kotlin']

let count = arraytest.map(x => x.length)
count

let closure = (function () {
    let state = false;
    return () => state ? state = false : state = true;
})()

let landscape = count.map((x, idx) => {
    
    let result = "";
    let state = closure();

    if (state === false) result += "/";
    for (let i = 0; i < x; i++) {
        if (idx % 2 == 0) {
            result += "_";
        } else {
            result += "^";
        }
    }
    if(state === false) result += "\\";

    return result
})

console.log(landscape.join(""));


let test = '   12px';
let trim = test.trim().split('px')
console.log(trim[0])