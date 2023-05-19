let num = [];
let operator = [];
let num2 = [];
let displayValue = [];


// Display

let display = document.querySelector(".display");


// Buttons

let buttons = document.querySelectorAll("button");

let numbers = document.querySelectorAll(".number");

let operators = document.querySelectorAll(".operator");

let clear = document.querySelector(".clear");

let equals = document.querySelector(".equals");



/*buttons.forEach(number => {
  numbers.addEventListener('click', function(){
    display.textContent = button.value;
  })
}) */



numbers.forEach(numb => {
  numb.addEventListener('click', function(e) {
    if (operator === "") { // Read first number if no operator set yet
      num += e.target.innerText;
      //num.slice(1);
      display.textContent = numb.value;
     // displayValue.push(num)
      console.log(num)
    } 
    else { // Read second number
      num2 += e.target.innerText;
      display.textContent = numb.value;
     // displayValue.push(num);
      console.log(num2)
    } 
  })
})

operators.forEach(oper => {
  oper.addEventListener("click", e => {
      operator = e.target.innerText;
      display.textContent = oper.value;
      console.log(operator)
      // If equals operator, perform operation

      switch (operator) { // Calculate and print output
        case "+":
            console.log(num + num2);
            break;

        case "-":
            console.log(num - num2);
            break;

        case "*":
            console.log(parseInt(num) * parseInt(num2));
            break;
        
        case "/":
            console.log(parseInt(num) / parseInt(num2));
            break;

        default:
            break;
    }
  });
});



function disableButtons() {
  buttons.forEach(cli => {
    if (cli !== clear) { 
    cli.disabled = true;
   }
  })
}


function activateButtons() {
  buttons.forEach(cli => {
    cli.disabled = false;
  })
}



// clear function
clear.addEventListener("click", function() {
  display.textContent = "";
  num = [];
  num2 = [];
  operator = [];
  activateButtons();
})


// equals function
equals.addEventListener("click", function() {
 console.log(  operate(num, operator, num2)  )
 disableButtons();
  
  //display.textContent = numb.value;
})






const add = function(num, num2) {
    return num + num2;
  }


const subtract = function(num, num2) {
    return num - num2;
};



const multiply = function(num, num2) {
    return num * num2;
 }



 const divide = function(num, num2) {
    return num / num2;
};



function operate(num, operator, num2) {
  //console.log (divide(1, 2) );
}

operate()

