
let num = "";
let num2 = "";
let operator = "";
let result = "";  


// Display

let display = document.querySelector(".display");


// Buttons

let buttons = document.querySelectorAll("button");

//let clear = document.querySelector(".clear");

//let equals = document.querySelector(".equals");



function start() {
buttons.forEach(button => {
  button.addEventListener('click', () => {
    handleButtons(button);
  })
}) 
}


/*function handleButtons(button) {

  if (button.classList.contains('number')) {
    if (num === "") { 
      currentValue += button.value;
     // console.log (currentValue);
   console.log (display.textContent += button.value) ;
    }

   else if (num !== "" && num2 === "" && (operator === "+" || operator === "-" || 
   operator === "*" || operator === "/" )) {
    console.log(operator);  
    
    //display.textContent.slice(0, -1);
    //num2 = display.textContent;
    num2 = button.value;

    //display.textContent = num2;
    
    console.log (num2);

    result = operate(num, num2, operator);

    display.textContent = `${num2}` + " = " + `${result}`;
    //display.textContent = result;

    //console.log(result);

    //console.log(currentValue); 
    
   }


   else if (num !== "" && num2 !== "" && (operator === "+" || operator === "-" || 
   operator === "*" || operator === "/" )) {
    console.log(operator);  
    
    //display.textContent.slice(0, -1);
    //num2 = display.textContent;
    num2 += button.value;
    
    console.log (num2);

    result = operate(num, num2, operator);

    display.textContent = `${num2}` + " = " + `${result}`; 
   }

 }

  else if (button.classList.contains('operator')) {

    if (num === "" && num2 === "" && operator === "") {
      num = display.textContent; // forrige talls verdi
      console.log (num);
      operator = button.value; // operator verdi
      display.textContent = button.value;
      }
       

    else if (num !== "" && num2 !== "" && operator !== "") {
      num = result; // forrige talls verdi
      console.log (num);
      operator = button.value; // operator verdi
      console.log (operator);
      display.textContent = `${num}` + " " + `${operator}`; 
    } 
   }
    
  
  else if (button.classList.contains('equals')) {

    console.log (operate(num, num2, operator) );
    display.textContent = operate(num, num2, operator);
    disableButtons();
  } 

   else if (button.classList.contains('clear')) {
    display.textContent = "";
    num = "";
    num2 = "";
    operator = "";
    activateButtons();
  } 
} */



function handleButtons(button) {

  if (button.classList.contains('number')) {
    if (operator === "") {
      num += button.value;
    } else {
      num2 += button.value;
    }
    display.textContent += button.value;
  } 
  
  else if (button.classList.contains('operator')) {
    if (num !== "" && num2 !== "") {
      result = operate(num, num2, operator);
      display.textContent = `${result} ${button.value}`;
      num = result;
      num2 = "";
    } else {
      operator = button.value;
      display.textContent += ` ${operator} `;
    }
  } 
  
  else if (button.classList.contains('equals')) {
    if (num !== "" && num2 !== "" && operator !== "") {
      result = operate(num, num2, operator);
      display.textContent = result;
      num = result;
      num2 = "";
      operator = "";
    }
  } else if (button.classList.contains('clear')) {
    display.textContent = "";
    num = "";
    num2 = "";
    operator = "";
  }
}




function roundResult(numb) {
  return Math.round(numb * 1000) / 1000
}



/*
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
} */



// clear function
/*
clear.addEventListener("click", function() {
  display.textContent = "";
  num = "";
  num2 = "";
  operator = "";
  activateButtons();
}) */


// equals function
/*
equals.addEventListener("click", function() { 
  disableButtons();
}) */




const add = function(num, num2) {
    return +num + +num2;
  }


const subtract = function(num, num2) {
    return num - num2;
};



const multiply = function(num, num2) {
    return num * num2;
 }



 const divide = function(num, num2) {
    if (num2 == 0) {
      display.textContent = "Opps";
      return "Opps";
    }
    else { 
    return roundResult(num / num2);
   }
};




function operate(num, num2, oper) {

if (oper === "+") {
 return add(num, num2);
}

else if (oper === "-") {
  return subtract(num, num2);
}

else if (oper === "*") {
  return multiply(num, num2);
}

else if (oper === "/") {
  return divide(num, num2);
}

}


start();  



