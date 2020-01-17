var max_len = 15;
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
    {
        console.log(content);
    }
    else if(content === "Clr")
    {
        console.log(content);
    }
    else if(content === "Del")
    {
        console.log(content);
    }
    else if(content === "/")
    {
        console.log(content);
    }
    else if(content === "*")
    {
        console.log(content);
    }
    else if(content === "+")
    {
        console.log(content);
    }
    else if(content === "-")
    {
        console.log(content);
    }
    else if(content === "=")
    {
        console.log(content);
    }
    else if(content === ".")
    {
        console.log(content);
    }
}

function add(numOne, numTwo){
    return numOne + numTwo;
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

function operate(operator, numOne, numTwo)
{
    if(operator === "+")
        add(numOne, numTwo);
    else if (operator === "-")
        sub(numOne, numTwo);
    else if (operator === "/")
        divide(numOne, numTwo);
    else if(operator === "*")
        mul(numOne, numTwo);

}

set_buttn_event();