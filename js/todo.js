const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')


////// event listeners //////
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
document.addEventListener('DOMContentLoaded',getTodos)

/////// functions //////

function addTodo(event) {
  event.preventDefault();

  ///todoDiv /////
  const todoDiv = document.createElement('div')
  todoDiv.classList.add('todo')
  //// li /////
  const newTodo = document.createElement('li')
  newTodo.innerText = todoInput.value
  newTodo.classList.add('todo-item')
  ///// save to localStorage /////
  saveToLocal(todoInput.value)

  todoDiv.appendChild(newTodo)
  ///// check mark item /////      
  const completedButton = document.createElement('button')
  completedButton.innerHTML = '<i class="fas fa-check"></i>'
  completedButton.classList.add('complete-btn')

  todoDiv.appendChild(completedButton)
  ///// check mark item /////      
  const trashButton = document.createElement('button')
  trashButton.innerHTML = '<i class="fas fa-trash"></i>'
  trashButton.classList.add('trash-btn')   

  todoDiv.appendChild(trashButton)
  //// append to list /////
  todoList.appendChild(todoDiv)

   todoInput.value = ''
}



function deleteCheck(e) {
     const item = e.target
     /// delete todo /////
     if (item.classList[0] === 'trash-btn') {
         const todo = item.parentElement
         //////animation
          todo.classList.add('fall')
          removeLocalTodos(todo)
          todo.addEventListener('transitionend',() => {
              todo.remove()
          })
     }

     if(item.classList[0] === 'complete-btn') {
          const todo = item.parentElement
          todo.classList.toggle('completed')
     }
}


function saveToLocal(todo) {
     let todos;
     if(localStorage.getItem('todos') === null) {
          todos = []
     } else {
          todos = JSON.parse(localStorage.getItem('todos'))
     }
     todos.push(todo)
     localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos () {
     let todos;
     if(localStorage.getItem('todos') === null) {
          todos = []
     } else {
          todos = JSON.parse(localStorage.getItem('todos'))
     }
     todos.forEach(todo => {
          const todoDiv = document.createElement('div')
          todoDiv.classList.add('todo')
          //// li /////
          const newTodo = document.createElement('li')
          newTodo.innerText = todo
          newTodo.classList.add('todo-item')

          todoDiv.appendChild(newTodo)
          ///// check mark item /////      
          const completedButton = document.createElement('button')
          completedButton.innerHTML = '<i class="fas fa-check"></i>'
          completedButton.classList.add('complete-btn')

          todoDiv.appendChild(completedButton)
          ///// check mark item /////      
          const trashButton = document.createElement('button')
          trashButton.innerHTML = '<i class="fas fa-trash"></i>'
          trashButton.classList.add('trash-btn')   

          todoDiv.appendChild(trashButton)
          //// append to list /////
          todoList.appendChild(todoDiv)
     })
}


function removeLocalTodos (todo) {
     let todos;
     if(localStorage.getItem('todos') === null) {
          todos = []
     } else {
          todos = JSON.parse(localStorage.getItem('todos'))
     }

     const todoIndex = todo.children[0].innerText
     todos.splice(todos.indexOf(todoIndex), 1)

     localStorage.setItem('todos',JSON.stringify(todos))
}