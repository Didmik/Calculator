let num = "";
let num2 = "";
let displayValue = "";
let currentValue = "";
let operator = "";


// Display

let display = document.querySelector(".display");


// Buttons

let buttons = document.querySelectorAll("button");

let numbers = document.querySelectorAll(".number");

let operators = document.querySelectorAll(".operator");

let clear = document.querySelector(".clear");

let equals = document.querySelector(".equals");



function start() {
buttons.forEach(button => {
  button.addEventListener('click', () => {
    handleButtons(button);
  })
}) 
}


function handleButtons(button) {
  if (button.classList.contains('number')) {
    //display.textContent = "";
    //console.log (display.textContent += button.value);
    if (num === "") { 
   console.log (display.textContent += button.value ) ;
    }

   else if (num !== "" && (currentValue === "+" || currentValue === "-" || 
   currentValue === "*" || currentValue === "/" )) {
    console.log(currentValue);  
    
    //display.textContent.slice(0, -1);
   // num2 = display.textContent;
    num2 += button.value;
    
    console.log (num2);
    display.textContent += button.value;
    //console.log (num);
   }
  } 

  else if (button.classList.contains('operator')) {
    if (num === "" && num2 === "" && displayValue === "" && currentValue === "") {
      //num = displayValue
     num = display.textContent; // forrige talls verdi
     console.log (num);
     currentValue = button.value; // operator verdi
      //displayValue += button.value;
      //display.textContent = displayValue;
      display.textContent = button.value;
      
     // display.textContent += button.value
    } else if (currentValue === "+" || currentValue === "-" || 
    currentValue === "*" || currentValue === "/" ) {  //if (num !== "" ) {
      //num2 = displayValue;
      console.log(currentValue);
      num2 = display.textContent;
      console.log (num2);
      //console.log (display.textContent.slice(0, -1) );
      operate(num, num2, currentValue);
      currentValue = button.value;
      //num = displayValue;
      displayValue += button.value;
      display.textContent = displayValue;
      //display.textContent = button.value;
    }
    // console.log( display.textContent = button.value  );
     //currentOperation = button.value;
     //console.log (currentOperation);
      //num2 = display.textContent;
      //display.textContent = operate(num, num2, currentOperation);
      //displayInput('clear', 0);
    
  } else if (button.classList.contains('equals')) {

    console.log (operate(num, num2, currentValue) );
   /* if (displayValue !== "" && num !== "") {
      num2 = displayValue;
      console.log (operate(num, num2, currentValue) );
    }
  } 
   else if (button.classList.contains('clear')) {
    
  } */
} 
 }




/*numbers.forEach(numb => {
  numb.addEventListener('click', function(e) {
    if (operator === "") { // Read first number if no operator set yet
      num += e.target.innerText;
      //num.slice(1);
      display.textContent = numb.value;
      //displayValue.push(num)
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
            //displayValue.push(operator);
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
});   */





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
  num = "";
  num2 = "";
  currentValue = "";
  displayValue = "";
  activateButtons();
})


// equals function
equals.addEventListener("click", function() {
 //console.log(  )  
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




function operate(num, num2, operator) {

if (operator === "+") {
 return add(num, num2);
}

else if (operator === "-") {
  return subtract(num, num2);
}

else if (operator === "*") {
  return multiply(num, num2);
}

else if (operator === "/") {
  return divide(num, num2);
}

}



start();  

//console.log(operate(1, 2, "+"));

