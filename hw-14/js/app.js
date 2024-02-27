function createSumCalculator() {
    let total = 0;
    return function sum(number) {
        total += number;
        return total;
    };
}

const sumAccumulator = createSumCalculator();

console.log(sumAccumulator(13));
console.log(sumAccumulator(5)); 
console.log(sumAccumulator(20)); 

