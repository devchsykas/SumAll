const sumAll = function (min, max) {
  //   let sum = 0;
  //   for (let i = min; i <= max; i++) {
  //     sum += i;
  //   }
  //   return sum;

  if (min < 0 || max < 0) {
    return "ERROR";
  }

  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR, non-number parameters";
  }

  const startNumber = min;
  const lastNumber = max;
  const numCount = Math.abs(startNumber - lastNumber) + 1;

  const sum = (numCount * (startNumber + lastNumber)) / 2;
  return sum;
};

console.log(sumAll(1, 4));
console.log(sumAll(1, 4000));
console.log(sumAll(123, 1));
console.log(sumAll(-10, 4));
console.log(sumAll(10, "90"));
console.log(sumAll(10, [90, 1]));

// Do not edit below this line
module.exports = sumAll;
