window.addEventListener('load',start);

var colorRed=null;
var colorGreen=null;
var colorBlue=null;

function start(){
    colorRed = document.querySelector('#red');
    colorGreen = document.querySelector("#green");
    colorBlue = document.querySelector('#blue');

    inputsRange = document.querySelectorAll('input[type=range]');
    inputsRange.forEach(function(element){
        element.addEventListener('change',showRangeValues);
    });
       
    showRangeValues();
}

function showRangeValues(){
    var inputReadOnly = document.querySelectorAll('input[type=text]');
    inputReadOnly[0].value = colorRed.value;
    inputReadOnly[1].value = colorGreen.value;
    inputReadOnly[2].value = colorBlue.value;

    paintSquare();
}

function paintSquare(){
    divSquare = document.querySelector('#square');
    divSquare.style.backgroundColor = 'rgb('+ colorRed.value + ',' + colorGreen.value +',' + colorBlue.value + ')';
}





