function equals () {

    var equation = document.getElementById('screen').value;

    try {
    console.log(equation + '=' + eval(equation));
    Calculator.Screen.value = eval(equation);

    }
    catch (e){
        Calculator.Screen.value = 'Error';
        console.log('Error');
    }
}
function del () {
    Calculator.Screen.value = Calculator.Screen.value.slice(0, -1);
}
