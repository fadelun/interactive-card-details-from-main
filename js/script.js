const frontNumber = document.querySelector('.number_set');
const frontName = document.querySelector(".name_set");
const frontMonth = document.querySelector(".date_set .month");
const frontYear = document.querySelector(".date_set .year");
const frontCode = document.querySelector(".code_set");

const inputName = document.querySelector("input#username");
const inputNumber = document.querySelector("input#number");
const inputMonth = document.querySelector("input#month");
const inputYear = document.querySelector("input#year");
const inputCode = document.querySelector("input#code");
const button = document.querySelector("button");

const form = document.querySelector("form")
const message = document.querySelector(".succes_message");
// const allInput = document.getElementsByName('input')





// contoh

// inputNumber.value = "1234556677889900";
// inputName.value = "Muhammad Fadll"


function createNumber(event) {
    let value = inputNumber.value;
    // console.log(event.target == inputNumber)
    handleInputNumber(value.split(''))
}

function createUsername() {
    let value = inputName.value;
    frontName.innerHTML = value
    // return value !== ""
}

function createMonth() {
    let value = inputMonth.value;
    frontMonth.innerHTML = value
}
function createYear() {
    let value = inputYear.value;
    frontYear.innerHTML = value
}
function createCode() {
    let value = inputCode.value;
    frontCode.innerHTML = value
}

function handleSubmit() {

    // const allInput = [inputName.value, inputNumber.value, inputMonth.value, inputYear.value, inputCode.value]
    const allInput = [inputName, inputNumber, inputMonth, inputYear, inputCode]
    const ID = [inputName.id, inputNumber.id, inputMonth.id, inputYear.id, inputCode.id]

    // const checkInputs = allInput.filter(item => item != "")

    for (let i = 0; i < allInput.length; i++) {
        let item = allInput[i]
        if (item.value == "") {
            for (let j = i; j < ID.length; j++) {

                if (item.id === ID[0]) {
                    item.nextElementSibling.innerHTML = "Username required"
                } else if (item.id === ID[1]) {
                    item.nextElementSibling.innerHTML = "Wrong format, number only"
                } else {
                    item.nextElementSibling.innerHTML = "can't be blank"
                }
            }

        } else {

            item.nextElementSibling.innerHTML = ""
        }
    }



    //     <p class="text_alert">Username required</p>
    // <p class="text_alert">Wrong format, number only</p>
    // <p class="text_alert">can't be blank</p>
    // <p class="text_alert">can't be blank</p>


    // console.log(checkInputs)
}



function handleInputNumber(value) {
    let arrayNumber = []
    for (let i = 0; i < value.length; i++) {
        if (i % 4 == 0 && i != 0) {
            arrayNumber.push(' ')
        }
        arrayNumber.push(value[i])

    }

    arrayNumber = arrayNumber.join('')

    frontNumber.innerHTML = arrayNumber

    // console.log(arrayNumber)



}

inputName.addEventListener('change', createUsername)
inputNumber.addEventListener('change', createNumber)
inputMonth.addEventListener('change', createMonth)
inputYear.addEventListener('change', createYear)
inputCode.addEventListener('change', createCode)
button.addEventListener('click', handleSubmit)



// function checkNumberInput(number) {
//     // let number = 'Mak3';

//     let num = /[^0-9]/gi


//     let result = number.match(num)

//     console.log(result ? "harus angka semua" : "benar")
// }



// inputNumber.oninvalid = function (event) {
//     event.target.setCustomValidity('Username should only contain lowercase letters. e.g. john');
// }

