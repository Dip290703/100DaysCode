function isStrongPassword(password) {
  let Password = password.trim();
  if (Password.length < 8) {
    return false;
  }
  const lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const digitChar = '0123456789'
  const specialChar = '!@#$%^&*()'
  let hasLower = false;
  let hasUpper = false;
  let hasDigit = false;
  let hasSpecial = false;
  for (let i = 0; i < Password.length; i++) {
    if( lowerCaseChar.includes(Password[i])){
        hasLower = true;
    }else if (upperCaseChar.includes(Password[i])){
        hasUpper = true;
    }else if (digitChar.includes(Password[i])){
        hasDigit = true;
    }else if(specialChar.includes(Password[i])){
        hasSpecial = true;
    }
  }
  if(hasDigit && hasLower && hasUpper && hasSpecial){
 return true
  }return false
  
}
console.log(isStrongPassword('password456A!'));

