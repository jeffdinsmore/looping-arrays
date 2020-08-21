// Business logic:

const userInput = "#input";
let numbers = Array.from(Array(userInput).keys());

console.log(numbers);





// User interface logic:

$(document).ready(function() {
  $("form#go").submit(function(event) {
  
    const userInput = "#input";
    let numbers = Array.from(Array(userInput).keys());
    
    console.log(numbers);

  
  
  
  
    $("#result").text(numbers);
    event.preventDefault();
  });
});