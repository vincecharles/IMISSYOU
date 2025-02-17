const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

//SUM
// const sum = x + y;
// const sumOutput = `${x} + ${y} = ${sum}`;
// console.log(sumOutput);

//DIFFERENCE
// const diff = x - y;
// const diffOutput = `${x} - ${y} = ${diff}`;
// console.log(diffOutput);

// PRODUCT
// const prod = x * y;
// const prodOutput = `${x} * ${y} = ${prod}`;
// console.log(prodOutput);

// QUOTIENT
// const quotient = x / y;
// const quotientOutput = `${x} / ${y} = ${quotient}`;
// console.log(quotientOutput);

// MODULO
// const rm = x % y;
// const rmOutput = `${x} % ${y} = ${rm}`;
// console.log(rmOutput);


const output = [
	`${x} + ${y} = ${x + y}`,
	`${x} - ${y} = ${x - y}`,
	`${x} * ${y} = ${x * y}`,
	`${x} / ${y} = ${x / y}`,
	`${x} % ${y} = ${x % y}`,
];


console.log(output);

