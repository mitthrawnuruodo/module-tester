/**
 * Source: https://en.wikipedia.org/wiki/Fibonacci_number
 */
export default function fibonacci(n) {
    //console.log("fib", n);
    let fib = [0, 1];
    if (n < 2) return fib[n];
    for (let i = 2; i <= n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[n];
}

/*
Possible test-cases:
console.log("f(0): ", fibonacci(0)); // 0
console.log("f(1): ", fibonacci(1)); // 1
console.log("f(2): ", fibonacci(2)); // 1
console.log("f(3): ", fibonacci(3)); // 2
console.log("f(4): ", fibonacci(4)); // 3
console.log("f(5): ", fibonacci(5)); // 5 
console.log("f(10): ", fibonacci(10)); // 55
console.log("f(10): ", fibonacci(19)); // 4181
console.log("f(100): ", fibonacci(100)); // 354224848179262000000
*/