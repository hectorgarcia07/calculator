var max_len = 15;
var cur_len = 0;
var firstDisplayVal = "";
var secondDisplayVal = "";
var result = "";
var operator = "";
var operationScreen = "";
var currOperationScreen = document.getElementById("current-operation");
var screen = document.getElementById("screen-num");

//set each button to have an event
function set_buttn_event()
{
    let buttons = document.getElementsByClassName("buttons");
    //give each button an event
    for(let i = 0; i < buttons.length; i++)
    {
        buttons[i].addEventListener("click", function(){
            handle_buttn_event(this);
        });
    }
}

//determines what button was pressed and determines its
//action
function handle_buttn_event(obj){
    let content = obj.textContent;
    
    //check if it is a number
    if(!isNaN(content))
        updateDisplay(content);

    switch(content)
    {
        //calculate the result of the expression
        case "=":
            //get the sencond number to perform operation
            if(screen.textContent.length === 0)
                secondDisplayVal = "0"
            else
                secondDisplayVal = screen.textContent;
            result = operate(operator, firstDisplayVal, secondDisplayVal);
            screen.innerHTML = result;
            updateCurrOperation();
            break;
        //if it's an operator, update the operator
        //and update the screen size
        case "/":
        case "*":
        case "+":
        case "-":
            buildOperation(content);
            break;
    }
    if(content === "Clr")
    {
        console.log(content);
    }
    else if(content === "Del")
    {
        console.log(content);
    }
    else if(content === ".")
    {
        console.log(content);
    }
}

//will build the operation when an operator is selected
function buildOperation(content)
{
    if(operator.length === 0)
    {
        operator = content;
        cur_len = 0;
        //get what number is on the screen
        if(screen.textContent.length === 0)
            firstDisplayVal = "0"
        else
            firstDisplayVal = screen.textContent;
        screen.innerHTML = "0";
        updateCurrOperation();
    }
    else if(result.toString().length > 0)
    {
        console.log("test");
        cur_len = 0;
        operator = content;
        firstDisplayVal = result;
        result = "";
        operationScreen = "";
        screen.innerHTML = "0"
        updateCurrOperation();
    }
    else
    {
        operator = content;
        operationScreen = firstDisplayVal + " " + operator;
        currOperationScreen.innerHTML = operationScreen;
    }
}

//function will update the display.
function updateDisplay(num)
{
    if(cur_len < max_len)
    {
        if(cur_len === 0)
            screen.innerHTML = num;
        else
            screen.insertAdjacentHTML('beforeend', num);
        cur_len++;
    }
}
function add(numOne, numTwo){
    return +numOne + +numTwo;
}

function sub(numOne, numTwo){
    return numOne - numTwo;
}

function divide(numOne, numTwo){
    return numOne / numTwo;
}

function mul(numOne, numTwo){
    return numOne * numTwo;
}

//will caclulate and return anwer based on user
//selected operator
function operate(operator, numOne, numTwo)
{
    if(operator === "+")
        return add(numOne, numTwo);
    else if (operator === "-")
        return sub(numOne, numTwo);
    else if (operator === "/")
        return divide(numOne, numTwo);
    else if(operator === "*")
        return mul(numOne, numTwo);
}

//will update the current opeation display
function updateCurrOperation()
{
    if(operationScreen.length === 0)
        operationScreen = firstDisplayVal + " " + operator;
    else
        operationScreen = operationScreen + " " + secondDisplayVal;

    
    currOperationScreen.innerHTML = operationScreen;
}

set_buttn_event();