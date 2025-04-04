const myString = 'developer';

let myNewString;

// For solution
//Solution1:
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

//Solution3: using slice and template literals
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

//Solution2: instead of using charAt(0) we will use string[0]
myNewString = myString[0].toUpperCase() + myString.substring(1);

// Solution 4:
myNewString = myString[0].toUpperCase() + myString.slice(1).toLowerCase();


console.log(myNewString); // Developer
