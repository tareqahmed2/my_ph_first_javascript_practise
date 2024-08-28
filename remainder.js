var number = [];

var div;
var remainder;

for (var i = 0; i < 5; i++) {
  number[i] = parseFloat(
    prompt(
      "enter the number which you divided by  5 and also see the remainder"
    )
  );
  div = parseInt(number[i] / 5);
  console.log("the division of this number is =", div);
  remainder = number[i] % 5;
  console.log("the remainder of this number after divided by 5 is=", remainder);
}
