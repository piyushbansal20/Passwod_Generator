const generatePasswordBtn = document.querySelector('.generate-passwords-btn')
const displayPassword = document.querySelector('#pw-d')
const changePasswordLength = document.querySelector('.change-password-length')

const characters =[
  1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','n','o','p','q','r','s','t','u','v','w','x','y','z','*','&','$','#','!','?','<','>','+'
]

let num = changePasswordLength.min 
changePasswordLength.value = num
changePasswordLength.addEventListener('input' , () =>  num = changePasswordLength.value)

function renderPassword(){
  let resultStr =" "
  for(let i=0; i < num; i++){
    let randomIndex = Math.floor(Math.random() * characters.length) 
    resultStr += characters[randomIndex]   
  }
  displayPassword.textContent = resultStr   
}

function copyPassword() {
  let password = displayPassword.textContent;
  navigator.clipboard.writeText(password)
    .then(() => {
      alert("Password copied to clipboard!")
    })
    .catch(err => {
      console.error('Failed to copy password: ', err);
    });
}
