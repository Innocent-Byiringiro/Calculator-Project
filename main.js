//variable storage
const results = document.getElementById('inputfield');

//enter number in input field
function enterNumber(number){
    results.value = results.value + number;
}
//calculate the result
function Answer(){
    try{
        results.value = eval(results.value);
    }
    catch(err){
        results.value = "Wrong input"
    }
}

// deletion
function DEL(){
    results.value = results.value.slice(0, -1);
}
//clearance
function clr(){
    results.value = " "
}