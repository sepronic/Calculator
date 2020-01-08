let textview = document.getElementById('textview');

function Del() {
    let exp = document.calc.textview.value;
    document.calc.textview.value = exp.substring(0, exp.length-1);
} 

document.oninput = function() {
    let input = document.querySelector('.screen');
    input.value = input.value.replace (/[^\+\d]/g, '');
}