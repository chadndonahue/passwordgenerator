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

  if(isNaN)(passwordLength) {
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
}
















// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Goes on bottom of the page?