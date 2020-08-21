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
    console.log(number3);
    
    
    let newArray = [];
    numbers.forEach(function(element1, element2) {
      for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < number3.length; j ++)
        if (element1[i] === element2[j]) {
          newArray.push(" Won't you be my neighbor?");
        } else if (element1 === 2) {
          newArray.push(" Boop!")
        } else if (element1 === 1) {
          newArray.push(" Beep!")
        } else {
        newArray.push(" " + element1);
      }
      }
    
      // if (element === 3) {
      // newArray.push(" Won't you be my neighbor?");
      // } 
    });
    // console.log(newArray);

    // console.log(numbers);

    
  
    
    
    $("#result").text(newArray);
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