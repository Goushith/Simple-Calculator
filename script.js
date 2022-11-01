function displayNum(num){
    // console.log(num);
    text.value+=num;
}

function clearBox(){
    text.value=""
}

function evaluateExpression(){
    // exp=text.value;
    // output=eval(exp)
    // text.value=output
    text.value=eval(text.value)
}


function backspace(){
    currentexp=text.value;
    text.value=currentexp.slice(0,-1)
}


