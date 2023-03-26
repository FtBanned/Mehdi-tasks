function validateGmailAddress(email) {
    let mail = /^[a-zA-Z0-9]{5,}@(gmail\.com)$/i;
    return mail.test(email);
  }
console.log(validateGmailAddress("abcdf@gmail.com"))
console.log(validateGmailAddress("abc@gmail.com"))
console.log(validateGmailAddress("abcdf@hotmail.com"))
  