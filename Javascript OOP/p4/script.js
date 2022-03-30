//primitive types are copied by value;
let x = 10;
let y = x;
x = 20;
console.log(y); // it will print 10 because the values was copied;

//objects are copied by reference
let a = {value:10};
let b = a;
a.value = 20;
console.log(b);

