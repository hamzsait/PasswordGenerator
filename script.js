// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//fucntions that returns a random number between 0 and len-1
function getRandomInt(len) {
  return Math.floor(Math.random() * Math.floor(len));
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// function collects the length and booleans of the password
function generatePassword(){

  length = generateLength();
  lowerCase = confirm("Use lower case characters in password?");
  upperCase = confirm("Use upper case characters in password?");
  numbers = confirm("Use numbers in password?");
  special = confirm("Use special characters in password?");
  
  return generatePasswordHelper(length,lowerCase,upperCase,numbers,special)
}

// fucntion prompts the user to enter a length of password and ensures the entries are number data types
function generateLength(){
  passwordLength = prompt("Please select length of password (Must be a number between 8 and 128)");
  passwordLength = Number(passwordLength);

  // Checks if the user entry is a number between 8 and 128 
  if (!(String(passwordLength) == "NaN") ){
    if ((passwordLength > 7) && (passwordLength < 129)){
      return passwordLength;
    }
    else{
      return generateLength()
    }
  }
  else{
    alert("This Is Not A Valid Entry. Please Try Again.")
    return generateLength()
  }
};


// function that spits out a password based on inputs  
function generatePasswordHelper(length,lowerCase,upperCase,number,special){

  options = ""
  password = ""

  lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  numberCharactes = "1234567890";
  specialCharacters = "!@#$%^&*()_+={[}]';:?><";


  // Uses the boolean variables provided to include types of characters in password
  if (lowerCase){
    options = options.concat(lowerCaseCharacters)
  }
  if (upperCase){
    options = options.concat(upperCaseCharacters)
  }
  if (number){
    options = options.concat(numberCharactes)
  }
  if (special){
    options = options.concat(specialCharacters)
  }

  //Checks that an option of character was selected
  if (lowerCase||upperCase||number||special){
    // for loop through the length of the string
    for (var i = 0; i<length;i++){
      password = password.concat(options[getRandomInt(options.length)])
    }
  }
  else{
    alert("Invalid Character Selection. Please Try Again.");
    return generatePassword();
  }


  return password;
}