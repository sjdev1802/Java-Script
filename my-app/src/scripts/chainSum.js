// sum(1)(2)(3)(4)(5)

let sum = (x) => (y) => y ? sum(x+y) : x;

console.log(sum(1)(2)(3)())