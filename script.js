//выводятся на экран
var output = document.getElementById('exp');
var usersInput = "";


//кнопки цифер м точка для плавающих
var btn1 = document.getElementById('one');
btn1.addEventListener('click', AddButtonsValue);
var btn2 = document.getElementById('two');
btn2.addEventListener('click', AddButtonsValue);
var btn3 = document.getElementById('three');
btn3.addEventListener('click', AddButtonsValue);
var btn4 = document.getElementById('four');
btn4.addEventListener('click', AddButtonsValue);
var btn5 = document.getElementById('five');
btn5.addEventListener('click', AddButtonsValue);
var btn6 = document.getElementById('six');
btn6.addEventListener('click', AddButtonsValue);
var btn7 = document.getElementById('seven');
btn7.addEventListener('click', AddButtonsValue);
var btn8 = document.getElementById('eight');
btn8.addEventListener('click', AddButtonsValue);
var btn9 = document.getElementById('nine');
btn9.addEventListener('click', AddButtonsValue);
var btnZero = document.getElementById('zero');
btnZero.addEventListener('click', AddButtonsValue);
var point = document.getElementById('point');
point.addEventListener('click', AddButtonsValue);


//кнопки действий
var add = document.getElementById('add');
add.addEventListener('click', AddButtonsValue);
var subtract = document.getElementById('subtract');
subtract.addEventListener('click', AddButtonsValue);
var multiple = document.getElementById('multiple');
multiple.addEventListener('click', AddButtonsValue);
var divide = document.getElementById('divide');
divide.addEventListener('click', AddButtonsValue);
var clearAll = document.getElementById('clearAll');
clearAll.addEventListener('click', clearAllOutput);
var removeLast = document.getElementById('removeLast');
removeLast.addEventListener('click', removeLastChar);
var equal = document.getElementById('equalSign');
equal.addEventListener('click', calculate);


//добавление и проверка значений

function AddButtonsValue() {
    
    var current = this.value;
    var lastChar = usersInput.slice(-1);
    var firstChar = usersInput[0];
    
    if (isNaN(current) && isNaN(lastChar)) {
        usersInput = usersInput.substring(0, usersInput.length-1) + current;
        output.innerText = usersInput;
    }
    else if (isNaN(current) && isNaN(firstChar)) {
        usersInput = usersInput;
    }
    else {
    usersInput += current;
    output.innerText = usersInput;
    }

}

//очистка
function clearAllOutput() {
    usersInput = "";
    output.innerText = usersInput;
}

//удаление последнего введенного элемента
function removeLastChar() {
    usersInput = usersInput.substring(0, usersInput.length-1);
    output.innerText = usersInput;
}

//result

function calculate() {
    var result = "";
    
    for (let i = 0; i < usersInput.length; i++) {
        
        if (usersInput[i] === "÷") {
            result += "/";
        }
        
        else if (usersInput[i] === "×") {
            result += "*";
        }
        
        else {
            result += usersInput[i];
        }
    }
    

alert(eval(result));


}
