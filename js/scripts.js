// Business logic:

// const userInput = "#input";
// let numbers = Array.from(Array(userInput).keys());

// console.log(numbers);





// User interface logic:

$(document).ready(function() {
  $("form#go").submit(function(event) {
    const numbers3 = [3,13];
    const userInput = parseInt($("#input").val());
    let numbers = Array.from(Array(userInput + 1).keys());
    let number3 = numbers.filter(input => input.toString().includes("3"));
    
    console.log(number3);
    

  
// const stringArray = numbers3.split(" ");
let newArray = [];
stringArray.forEach(function(number) {
    if (number3.includes(number)) {
        newArray.push("goober");
    } else {
      newArray.push(number);
    }
});

const finalArray = newArray.join(" ");

    
    // let newArray = [];
    //   for (let i = 0; i < numbers.length; i++) {
    //     for (let j = 0; j < number3.length; j ++) 
    //     if (numbers.includes("3")) {
    //       newArray.push(" Won't you be my neighbor?");
    //     // } else if (numbers[i] === 2) {
    //     //   newArray.push(" Boop!")
    //     // } else if (numbers[i] === 1) {
    //     //   newArray.push(" Beep!")
    //     }
    //     else if (numbers[i] !== number3[j]) {
    //       newArray.push(" " + i);
      
      
      
    //   }
    // }
    
      // if (element === 3) {
      // newArray.push(" Won't you be my neighbor?");
      // } 
  
    // console.log(newArray);

    // console.log(numbers);

    
  
    
    
    $("#result").text(finalArray);
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