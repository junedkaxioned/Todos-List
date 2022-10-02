var form = document.querySelector('.form');
var input = document.querySelector('.form-input');
var todos = document.querySelector('.todos');
var list = JSON.parse(localStorage.getItem('list'));

// Function for submit todos
form.addEventListener('submit', function (temp) {
  temp.preventDefault();
  addTodos();
})

if(list) {
  list.forEach(function (todo){ addTodos(todo)});
}

// Function for Add todos
function addTodos(todo) {
  var todoText = input.value;
  
  if(todo) {
    todoText = todo.text;
  }

  if(todoText) {
    var todosList = document.createElement('li');
    todosList.innerText = todoText;

    var todoCompleted = todosList.addEventListener('click', function () {
      todosList.classList.toggle('completed');
      updateTodos();
    }) 
    
    if(todoCompleted) {
      todosList.classList.add('completed');
    }

    todosList.addEventListener('contextmenu', function (remove) {
      remove.preventDefault();
      todosList.remove();
      updateTodos();
    }) 

    todos.appendChild(todosList)
    input.value = '';
    updateTodos();
  }
}

// Function of  Localstorage  
function updateTodos() {
  var todoList = document.querySelectorAll("li");
  var list = [];

  todoList.forEach(function  (todosList){
    list.push({
      text: todosList.innerText,
      Completed : todosList.classList.contains('completed')
    })
  });
  localStorage.setItem('list', JSON.stringify(list));
}