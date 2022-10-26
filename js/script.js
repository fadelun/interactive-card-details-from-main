const frontNumber = document.querySelector('.number_set');
const frontName = document.querySelector(".name_set");
const frontDate = document.querySelector(".year_set");

const inputName = document.querySelector("input[type=text]")
const inputNumber = document.querySelector("input[type=number]")
// const inputDate = document.querySelector("input[")


function createNumber() {
    let value = inputNumber.value
    frontNumber.innerHTML = value
}

inputNumber.addEventListener('change', createNumber)

// setInterval(function(){
    
// }, 10)

