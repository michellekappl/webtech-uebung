function fib(n) {
    let fib = 0

    if (n < 0) {
        return console.log('nur positive Werte sind gütlig!');
    } else if (n == 0) {
        return fib = 0;
    } else if (n == 1){
        return fib = 1;
    } else {
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

console.log(fib());