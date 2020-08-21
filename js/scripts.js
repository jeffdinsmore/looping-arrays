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
    
    let xArray = [];
    numbers.forEach(function(letter) {
      if (number3.includes(letter)) {
        xArray.push("Won't you be my neighbor?");
      } else {
        xArray.push(letter);
      }
    });
    const finalString = xArray.join(", ");
  



    $("#result").text(finalString);
    event.preventDefault();
  });
});