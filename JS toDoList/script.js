//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click',filterTodo);

//Functions

function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();
    //todoDiv
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoDiv.classList.add('uncompleted');
    //Создаем li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Добавляем To_do в localstorage
    saveLocalTodos({text:todoInput.value, state:'uncompleted'});
    //Создаем инопку check button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //Создаем кнопку trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Добавляем item в LIST
    todoList.appendChild(todoDiv);
    todoInput.value = '';
}

function deleteCheck(e) {
   const item = e.target;
   //Кнопка удалить на to do
    if(item.classList[0] ==='trash-btn') {
        const todo = item.parentElement;
        //Анимация
        todo.classList.add('fall');
        removeLocalTodo(todo);
        todo.addEventListener('transitionend', ()=>{
            todo.remove();
        });
    }

    //Кнопка check
    if(item.classList[0] ==='complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
        let local = JSON.parse(localStorage.getItem('todos'));
        local.forEach((todoL)=>{
            if(todoL.text===todo.childNodes[0].innerText){
                if(todoL.state === 'uncompleted'){
                    todoL.state = 'completed';
                }else{
                    todoL.state = 'uncompleted';
                }
            }
        });
        localStorage.setItem('todos', JSON.stringify(local));
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    for(let i = 1; i<todos.length; i++){
        switch (e.target.value) {
            case 'all':
                console.log('all');
                todos[i].style.display = 'flex';
                break;
            case 'completed':
                if(todos[i].classList.contains('completed')){
                    todos[i].style.display = 'flex';
                }else{
                    todos[i].style.display = 'none';
                }
                break;
            case 'uncompleted':
                if(!todos[i].classList.contains('completed')){
                    todos[i].style.display = 'flex';
                }else{
                    todos[i].style.display = 'none';
                }
                break;
        }
    }
}

function saveLocalTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo);
    console.log(JSON.stringify(todos));

    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach(function (todo) {
        //todoDiv
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        todoDiv.classList.add(`${todo.state}`);
        //Создаем li
        const newTodo = document.createElement('li');
        newTodo.innerText = todo.text;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        //Создаем кнопку check button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);
        //Создаем кнопку trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);
        //Добавляем item в LIST
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodo(todo) {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}