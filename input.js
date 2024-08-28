var taka = prompt("Enter how much money do you have");
console.log("Price of 1kg apples = 200tk");
console.log("Price of 1kg orange = 300tk");

var needApple = Number(prompt("How many apples do you need"));
var needOrange = Number(prompt("How many oranges do you need"));

var applePrice = 200 * needApple;
console.log("Your price for apples =", applePrice);

var orangePrice = 300 * needOrange; // Changed needApple to needOrange
console.log("Your price for oranges =", orangePrice);
var youHaveMoney = taka - (orangePrice + applePrice);
console.log("now you have money=" + youHaveMoney);
