let num1 = parseFloat(window.prompt("enter first number: "));

let operator = window.prompt("enter operator +,-,*,/: ");

let num2 = parseFloat (window.prompt("enter second number: "))

function cal(){
    if (operator == "+"){
        alert(num1 + num2)
    }else if(operator == "-"){
        alert(num1 - num2)
    }else if(operator == "*"){
        alert(num1 * num2)
    }else if(operator == "/"){
        alert(num1 / num2)
    }else{
        alert("invalid")
    }
}

cal()
