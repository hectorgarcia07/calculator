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