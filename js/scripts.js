// Business logic:
function replaceNumbers(numberInput) {
  let numbers = Array.from(Array(numberInput + 1).keys());
  let number3 = numbers.filter(input => input.toString().includes("3"));
  let number2 = numbers.filter(input => input.toString().includes("2"));
  let number1 = numbers.filter(input => input.toString().includes("1"));
  let newArray = [];
  numbers.forEach(function(number) {
    if (number3.includes(number)) {
      newArray.push("Won't you be my neighbor?");
    } else if (number2.includes(number)) {
      newArray.push("Boop!");
    } else if (number1.includes(number)) {
      newArray.push("Beep!");
    } else {
      newArray.push(number);
    }
  });
  return newArray;
}

// User interface logic:

$(document).ready(function() {
  $("form#go").submit(function(event) {
    event.preventDefault();
    const userInput = parseInt($("#input").val());
    newArray2 = replaceNumbers(userInput);
    const finalString = newArray2.join(", ");
    $(".pink").show();
    $("#result").text(finalString);
  });
});