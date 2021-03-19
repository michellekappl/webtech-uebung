function fib(n) {
    let fib = 0

    if (n < 0) return console.log('nur positive Werte sind gueltig!');
    else if (n == 0) return fib = 0;
    else if (n == 1) return fib = 1;
    else {
        let secondtolast = 0;
        let last = 1;

        for (let i = 2; i <= n; i++) {
            fib = secondtolast + last;
            secondtolast = last;
            last = fib;
        }
        return fib;
    }
}

function rfib(n) {
    let fib = 0;

    if (n < 0) return console.log('nur positive werte sind gueltig!');
    else if (n === 0) return fib = 0;
    else if (n === 1) return fib = 1;
    else return rfib(n - 1) + rfib(n - 2);
}


console.log(fib(0));
console.log(rfib(0));