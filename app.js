function factorize(num) {
    let out = []

    for (let i = 1; i <= num; i++){

        if (num % i == 0) {
            out.push(i)
        }
    }

    return out
}

console.log(factorize(12));
console.log(factorize(31));
console.log(factorize(45));