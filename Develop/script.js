//Assignment Code 


// Globals 
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters =["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// Variable Declarations
var verifyLength = "";
var verifyLowercase;
var verifyUpperCase;
var verifyNumeric;
var verifySpecialcharacter;

// Verifying how many characters the user would like in the password
function generatePassword() {
  var verifyLength = (prompt("How long would you like your password to be?"));


  // Loop if password not between 8 to 128 characters
  while(verifyLength <= 7 || verifyLength >= 129) {
    alert("Password length must be between 8 to 128 characters");
    var verifyLength = (prompt("How many characters would you like your password to contain?"));
    } 


// Type of characters user would like the password to contain
  var verifyLowercase = confirm("Click OK to confirm if you would like to include lowercase characters");
  var verifyUppercase = confirm("Click OK to confirm if you would like to include uppercase characters");
  var verifyNumeric = confirm("Click OK to confirm if you would like to include numeric characters"); 
  var verifySpecialcharacter = confirm("Click OK to confirm if you would like to include special characters");   
  
// Loop if password outside parameters
    while(verifyLowercase === false && verifyUppercase === false && verifyNumeric === false && verifySpecialcharacter === false) {
      alert("You must choose at least one parameter");
      var verifyLowercase = confirm("Click OK to confirm if you would like to include lowercase characters");
      var verifyUppercase = confirm("Click OK to confirm if you would like to include uppercase characters"); 
      var verifyNumeric = confirm("Click OK to confirm if you would like to include numeric characters");
      var verifySpecialcharacter = confirm("Click OK to confirm if you would like to include special characters");
              
  } 

 // Password parameters
 var passwordCharacters = []
    if (verifyLowercase) {
      passwordCharacters = passwordCharacters.concat(lowercase)
    }
    if (verifyUppercase) {
    passwordCharacters = passwordCharacters.concat(uppercase)
    }  
    if (verifyNumeric) {
      passwordCharacters = passwordCharacters.concat(numeric)
    }
    if (verifySpecialcharacter) {
      passwordCharacters = passwordCharacters.concat(specialCharacters)
    } 
  console.log(passwordCharacters)

//generates password
 var createPassword = ""  
   for (i = 0; i < verifyLength; i++) {
     var createPassword = createPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
     console.log(createPassword)
   }
   return createPassword;
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);