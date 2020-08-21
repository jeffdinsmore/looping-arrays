// Business logic:

// const userInput = "#input";
// let numbers = Array.from(Array(userInput).keys());

// console.log(numbers);





// User interface logic:

$(document).ready(function() {
  $("form#go").submit(function(event) {
  
    const userInput = parseInt($("#input").val());
    let numbers = Array.from(Array(userInput + 1).keys());
    
    
    let doubledArray = [];
    numbers.forEach(function(element) {
      if (element === 3) {
      doubledArray.push(" Won't you be my neighbor?");
      } else if (element === 2) {
          doubledArray.push(" Boop!")
      } else if (element === 1) {
          doubledArray.push(" Beep!")
      } else {
        doubledArray.push(" " + element);
      }
    });
    console.log(doubledArray);

    console.log(numbers);

    
  
    
    
    $("#result").text(doubledArray);
    event.preventDefault();
  });
});

// var input = document.querySelector('input'); // get the input element
// input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
// resizeInput.call(input); // immediately call the function

// function resizeInput() {
//   this.style.width = this.value.length + "ch";
// }

// const splitNumbers = numbers.split("");
//     console.log(splitNumbers);