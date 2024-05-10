let characters = []
const upperCaseValues = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerCaseValues = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numberValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const specialValues = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let passGen = false
let pwdOne = ""
let pwdTwo = ""
let passBtn = document.getElementById("passbtn-el")
let passOne = document.getElementById("passOne-el")
let passTwo = document.getElementById("passTwo-el")
let errorMsg = document.getElementById("errorMsg-el")
let mySlider = document.getElementById("pwdLength-el")
let sliderValue = document.getElementById("slider-el")
let pwdStrength = document.getElementById("pwd-st")
let pwdMsg = document.getElementById("pwdMsg-el")

sliderValue.textContent = mySlider.value
sliderValue.className = "green"
sliderValue.textContent += " Strong Password"

mySlider.oninput = function() {
    sliderValue.textContent = this.value
    if(this.value < 5) {
        sliderValue.className = "red"
        sliderValue.textContent += " Weak Password"
    } else if(this.value < 12) {
        sliderValue.className = "yellow"
        sliderValue.textContent += " Average Password"
    } else {
        sliderValue.className = "green"
        sliderValue.textContent += " Strong Password"
    }
}

passBtn.addEventListener("click", function() {

    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    const checkedOne = Array.from(checkboxes).some(x => x.checked)

    if(!checkedOne) {
        errorMsg.textContent = "Please select at least one type of characters"
        errorMsg.className = "red"        
    } else {
        pwdMsg.textContent = ""
        errorMsg.textContent = ""
        characters = []
        createChar()
        
    }
})

function createChar() {
    
    if(document.pwdOptions.upperCase.checked) {
        characters.push.apply(characters, upperCaseValues) 
    } else {
        characters = characters.filter((item) => !upperCaseValues.includes(item))
    }
    
    if(document.pwdOptions.lowerCase.checked) {
        characters.push.apply(characters, lowerCaseValues)
    } else {
        characters = characters.filter((item) => !lowerCaseValues.includes(item))
    }
    
    if(document.pwdOptions.numbers.checked) {
        characters.push.apply(characters, numberValues) 
    } else {
        characters = characters.filter((item) => !numberValues.includes(item))
    }
    
    if(document.pwdOptions.special.checked) {
        characters.push.apply(characters, specialValues) 
    } else {
        characters = characters.filter((item) => !specialValues.includes(item))
    }
    
    pwdOne = ""
    pwdTwo = ""
  
    for(let i = 0; i < mySlider.value; i++) {
            pwdOne += characters[Math.floor(Math.random() * characters.length)]
            pwdTwo += characters[Math.floor(Math.random() * characters.length)]
    }
    
    passOne.textContent = pwdOne    
    passTwo.textContent = pwdTwo
    passGen = true
}

function copyPwd(x) {
  
  navigator.clipboard.writeText(x);

  pwdMsg.textContent = "Selected password copied"
}