function isFibonacciNumber(n) {
    if (n < 0) return false; 

    let a = 0, b = 1; 

    
    while (a < n) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    
    return a === n;
}

const numero = 21; 

if (isFibonacciNumber(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
}