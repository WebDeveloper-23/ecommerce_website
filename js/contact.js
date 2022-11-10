const form = document.querySelector('.form')

form.addEventListener('submit', (event) => {
     event.preventDefault()

     let error = document.querySelector('.error')

     let name = document.getElementById('name')
     let email = document.getElementById('email')
     let subject = document.getElementById('subject')
     let textarea = document.getElementById('textarea')

     let nameVal = name.value
     let emailVal = email.value
     let subjectVal = subject.value
     let textareaVal = textarea.value

     let errorMessage = 'please fill all inputs'


     if(nameVal === '' || emailVal === '' || subjectVal === '' || textareaVal === ''){
          error.textContent = errorMessage
          error.classList.add('active')
     } else {
          form.submit()
     }

})