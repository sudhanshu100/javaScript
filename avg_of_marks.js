let avg, sum = 0;
let marks = [85,97,44,37,76,60];
for (let i=0; i<marks.length; i++) {
    sum = sum + marks[i];
}
avg = sum/marks.length;
console.log("Average marks of class is:" +avg)
