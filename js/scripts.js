//seleção dos elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn= document.querySelector("#cancel-edit-btn");

//variavel input que será editado
let oldInputValue;

//Funções

const saveTodo = (text) =>{
    const todo = document.createElement("div");
    todo.classList.add("todo");

const todoTitle = document.createElement("h3");
todoTitle.innerText = text
todo.appendChild(todoTitle);

// criação do botão finalizar
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)
 // criação do botão editar
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)
 // criação do botão remover
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)

//colocar o todo na lista geral todo-list
    todoList.appendChild(todo);
//limpar o input depois que o usuário diditar
    todoInput.value ="";
//focar novamento no input apos limpar o que o usuário digita
    todoInput.focus();
};

//abrir formulario de edição e esconder o de tarefas

const toggleForms =() =>{
    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
}

//função atualizar edição da tarefa

const updateTodo =(text) =>{
    const todos =document.querySelectorAll(".todo")
    //percorrer os todos
    todos.forEach((todo) =>{
        let todoTitle = todo.querySelector("h3")
        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText =text;
        }
    })

}
//Eventos
todoForm.addEventListener("submit",(e) =>{
        e.preventDefault();

const inputValue =todoInput.value;

if (inputValue){
    saveTodo(inputValue)
}
});

//Evento botão finalzar tarefa

document.addEventListener("click", (e)=>{
    const targetEl = e.target;
    const parentEl = targetEl.closest("div") //pegar div mais proxima no caso todo
    let todoTitle; //variavel de escopo global

    if(parentEl && parentEl.querySelector("h3")){//verificação se um elemento possui um titulo
        todoTitle = parentEl.querySelector("h3").innerText;
    }

    if(targetEl.classList.contains("finish-todo")){ //marcar como feito tarefa
        parentEl.classList.toggle("done");
    }
    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove(); //ecluir tarefa
    }
    if(targetEl.classList.contains("edit-todo")){
        toggleForms();//editar tarefa
        
        editInput.value = todoTitle; //editando valor do input
        oldInputValue = todoTitle;
    }

});

//Evento cancelar edição

cancelEditBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    toggleForms();
});

//Evento validar botão e edição

editForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const editInputValue = editInput.value //novo valor 
    
    if(editInputValue)
        //atualizar valor editado
        updateTodo(editInputValue)

    toggleForms()
});