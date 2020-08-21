// Business logic:

// const userInput = "#input";
// let numbers = Array.from(Array(userInput).keys());

// console.log(numbers);





// User interface logic:

$(document).ready(function() {
  $("form#go").submit(function(event) {
    
    const userInput = parseInt($("#input").val());
    let numbers = Array.from(Array(userInput + 1).keys());
    let number3 = numbers.filter(input => input.toString().includes("3"));
    let number2 = numbers.filter(input => input.toString().includes("2"));
    let number2 = numbers.filter(input => input.toString().includes("2"));
    
    let xArray = [];
    numbers.forEach(function(letter) {
      if (number3.includes(letter)) {
        xArray.push("Won't you be my neighbor?");
      } else if (number2.includes(letter)) {
        xArray.push("Boop!");
      } else if (number1.includes(letter)) {
        xArray.push("Beep!");
      } else {
        xArray.push(letter);
      }
    });
    const finalString = xArray.join(", ");
  



    $("#result").text(finalString);
    event.preventDefault();
  });
});