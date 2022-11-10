const registerLinkBtn = document.querySelector('.registerlink')
const loginLinkBtn = document.querySelector('.loginlink')
let registerForm = document.querySelector('.registerform')
let loginForm = document.querySelector('.loginform')

registerLinkBtn.addEventListener('click',showRegisterForm)
loginLinkBtn.addEventListener('click',showLoginForm)

function showRegisterForm() {
     registerForm.classList.add('active')
     loginForm.classList.add('hide')
}
function showLoginForm () {
     registerForm.classList.remove('active')
     loginForm.classList.remove('hide')
}


let showHidePasssword = document.querySelectorAll('.show-hide-password')
     for (const iterator of showHidePasssword) {
          iterator.addEventListener('click', (event) => {
               let item = event.target
               // console.log(item.parentElement.children[1])
               if(item.parentElement.children[1].type === 'password'){
                    item.parentElement.children[1].type = 'text'
               } else{
                    item.parentElement.children[1].type = 'password'
               }
          })
     }


registerForm.addEventListener('submit', (e) => {
     e.preventDefault()
     checkRegInputs()
})

function checkRegInputs() {
     const nameInput = document.getElementById('name')
     const lastNameInput = document.getElementById('lastname')
     const username = document.getElementById('registerUsername')
     const email = document.getElementById('email')
     const password = document.getElementById('regpassword')
     const errorsDiv = document.querySelector('.errormesages')

     const nameInputVal = nameInput.value.trim()
     const lastNameInputVal = lastNameInput.value.trim()
     const usernameVal = username.value.trim()
     const emailVal = email.value.trim()
     const passwordVal = password.value.trim()

     let errorsArray = []

     if(nameInputVal === '' || nameInputVal == null) {
          errorsArray.push('name is required')
     }

     if(lastNameInputVal === '' || lastNameInputVal == null) {
          errorsArray.push('last name is required')
     }

     if(usernameVal === '' || usernameVal == null  || usernameVal.length <= 3) {
          errorsArray.push('username min characters >= 3')
     }

     if(emailVal === '' || emailVal == null || emailVal.length < 8){
          errorsArray.push('email is required!')
     }

     if(passwordVal === '' || passwordVal == null || passwordVal.length < 8){
          errorsArray.push('passwords is short,min characters 8')
     }

     if(errorsArray.length > 0) {
          errorsDiv.innerText = errorsArray.join(' ,   ')
          errorsDiv.classList.add('active')
     }


     if(errorsArray.length == 0){
          registerForm.submit()
     }
}

//// login

loginForm.addEventListener('submit', (e) => {
     e.preventDefault()
     checkLogin()
})

function checkLogin () {
     const saveCheck = document.getElementById('saveme')
     const userName = document.getElementById('loginUsername')
     const password = document.getElementById('password') 

     const errorsMessage = document.querySelector('.errormesagesLogin')

     const userNameVal = userName.value
     const passwordVal = password.value

     let errors = []

     if (saveCheck.checked){
          saveToLocal()
     }


     if(userNameVal === '' || passwordVal === ''){
          errors.push('These fields are required to Log in !')
     }


     if(errors.length > 0) {
          errorsMessage.innerText = errors.join(' ,   ')
          errorsMessage.classList.add('active')
     }

     if (errors.length == 0){
          loginForm.submit()
     }
     
}

function saveToLocal() {
     const userName = document.getElementById('loginUsername')
     const password = document.getElementById('password') 

     const userNameVal = userName.value
     const passwordVal = password.value

     let obj = {
          username: userNameVal,
          password:passwordVal
     }

     localStorage.setItem('text', JSON.stringify(obj))
}

function getLocalData() {
     let storedValue = JSON.parse(localStorage.getItem('text'))
     if(storedValue) {
         document.getElementById('loginUsername').value = storedValue.username
         document.getElementById('password').value = storedValue.password
     }
     // console.log(storedValue)
}

getLocalData()

function removeLocalData() {
     localStorage.removeItem('text')
}

const removeDataBtn = document.querySelector('.removeData')

removeDataBtn.addEventListener('click',removeLocalData)

