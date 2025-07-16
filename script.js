
let inputSlider = document.getElementById('inputSlider')
let sliderValue = document.getElementById('sliderValue')
const passBox = document.querySelector('#passBox')
const lowerCase = document.querySelector('#lowercase')
const upperCase = document.querySelector('#uppercase')
const number = document.querySelector('#numbers')
const symbol = document.querySelector('#symbol')
const genBtn = document.querySelector('.genBtn')
const copyIcon = document.querySelector('#copy-icon');


sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
})

genBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
})

let upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerChars = 'abcdefghijklmnopqrstuvwxyz';
let num = '0123456789';
let allsymbols = '!@#$%^&*~'

function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars += lowerCase.checked ? lowerChars :  '';  // if lowercase is checked then put lowerChars elese put empty string
    allChars += upperCase.checked ? upperChars : '';  // here checked is used to check the HTML checkBox and return true or false
    allChars += number.checked ? num : '';
    allChars += symbol.checked ? allsymbols : '';

    for(let i=1;i<=inputSlider.value;i++){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    return genPassword
}

copyIcon.addEventListener('click', () => {
    if(passBox.value !== "" || passBox.value.length >=3){
        navigator.clipboard.writeText(passBox.value)
        copyIcon.innerHTML = '✔ ';  //  after generating password just check 
        copyIcon.title = "Password Copied";

        setTimeout(() => {
            copyIcon.innerText = 'content_copy';  //  after generating password just check
            copyIcon.title = ""; 
        }, 2000)
    }
})