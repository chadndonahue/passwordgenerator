// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // this returns undefined if nothing is entered
  if(!password) return
  passwordText.value = password;

}
// These will be the variables that I can pick from
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789" 
var specialChar = "~@#$%^&*()_+|"

// Setting two empty strings that will be filled 
function generatePassword() {
  var passwordCharacters = ""
  var password = ""

  var passwordLength = prompt("Please select a password length between 8 and 128")
  if(!passwordLength)
  return

  // isNan checks if a number is entered or not and will return false if it is not a number

  if(isNaN(passwordLength)) {
    alert("only enter a number dingus")
    return
  }
  // This tells it what to do when someone enters a numbers below 8
  if(passwordLength < 8) {
    alert("dude it says 8 or above")
    return
  }
  // This tells it what to do when someone enters a number above 128
  if(passwordLength > 128) {
    alert("man it says right there 128 or less")
    return
  }
  // This adds lowercase to password characters if confirmed
  var lowercaseAnswer = confirm("Click confirm for lowercase letters")
  if(lowercaseAnswer) passwordCharacters += lowerCase
  // This adds uppercase to password characters if confirmed
  var uppercaseAnswer = confirm("Click confirm for uppercase letters")
  if(uppercaseAnswer) passwordCharacters += upperCase
  // This adds numbers to password characters if confirmed
  var numberAnswer = confirm("Click confirm for numbers")
  if(numberAnswer) passwordCharacters += numbers
  // This adds special characters to special characters if confirmed
  var specialAnswer = confirm("Click confirm for special characters")
  if(specialAnswer) passwordCharacters += specialChar
  // If the password has nothing it gives this message and returns them back
  if(passwordCharacters.length == 0) {
    alert("You must add one character type")
    return
  }
  // this while loops keeps grabbing until it is the same length.
  while(password.length < passwordLength) {
    password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
    console.log(password)
  }
  return password
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Goes on bottom of the page?