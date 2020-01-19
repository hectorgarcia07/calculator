var max_len = 15;
var cur_len = 0;
var displayVal = "";
var operator = "";
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
            console.log(screen.textContent);
            displayVal = operate(operator, displayVal, screen.textContent);
            screen.innerHTML = displayVal;
            console.log(displayVal);
            break;
        //if it's an operator, update the operator
        //and update the screen size
        case "/":
        case "*":
        case "+":
        case "-":
            operator = content;
            displayVal = screen.innerHTML;
            cur_len = 0;
            screen.innerHTML = "0";
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
    if(numOne.length === 0 && numTwo.length === 0)
        return "0";
    else if(numOne.length > 0 && numTwo.length === 0)
        return numOne;

    if(operator === "+")
        return add(numOne, numTwo);
    else if (operator === "-")
        return sub(numOne, numTwo);
    else if (operator === "/")
        return divide(numOne, numTwo);
    else if(operator === "*")
        return mul(numOne, numTwo);
}

set_buttn_event();