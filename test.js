function sumOfMultiples(f, m) {
    let sum = 0;

    for (let num of m) {
        for (let factor of f) {
            if (factor !== 0 && num % factor === 0) {
                sum += num;
                break; 
            }
        }
    }

    return sum;
}
const f = [2, 3];
const m = [3, 4, 5, 6, 7, 8, 9, 10];

console.log(sumOfMultiples(f, m));
const button = document.getElementById("calcBtn");
const outputDiv = document.getElementById("output");

button.addEventListener("click", function () {
    const f = [2, 3];
    const m = [3, 4, 5, 6, 7, 8, 9, 10];

    const result = sumOfMultiples(f, m);


    outputDiv.textContent = "Result: " + result;
});