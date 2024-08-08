//filter out the marks above 90 using filter method...

let marks = [ 87, 93, 64, 99, 86 ];
let toppers = marks.filter((val) => {
    return val > 90;

})
console.log(toppers);

// take a no. n as input from user, creat an array from 1 to n. use reduce method to :-
// i) calculate sum of all numbers in array
// ii) calculate product of all numbers in array

let num = prompt("enter a number");
let arr=[];
for( let i=1; i<=num; i++){
    arr[i-1]=i;
}
console.log(arr);
let sum = arr.reduce((prev, curr) => {
    return prev+curr;
})
console.log("sum of array elements:-" +sum);
let prod = arr.reduce((prev, curr) => {
    return prev*curr;
})
console.log("product of array elements:-" + prod);

