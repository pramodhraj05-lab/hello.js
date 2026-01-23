function sumOfMultiples(p, q) {
    let sum = 0;

    for (let x of p) {
        for (let y of q) {
            if (y !== 0 && x % y === 0) {
                sum += x;
                break; 
            }
        }
    }

    return sum;
}