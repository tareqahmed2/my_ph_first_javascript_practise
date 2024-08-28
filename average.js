var sum = 0,
  average;
var number = [];
for (var i = 0; i < 5; i++) {
  number[i] = parseInt(prompt(" enter the all number of your subject"));
  sum += number[i];
}

console.log("sum of all numbers is=", sum);
average = sum / 5;
console.log("average is =", average);
