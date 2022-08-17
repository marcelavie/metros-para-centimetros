var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var ResultType = document.getElementById('ResultType');
var inputTypeValue,ResultTypeValue;

input.addEventListener('keyup',myResult);
inputType.addEventListener('change', myResult );
ResultType.addEventListener('change', myResult );


inputTypeValue = inputType.value;
ResultTypeValue= ResultType.value;
function myResult(){

    result.value = Number(input.value) * 100;
}