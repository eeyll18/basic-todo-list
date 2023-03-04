const addTodoButton = document.getElementById("addTodoButton");
const clearTodosButton = document.getElementById("clearTodosButton");
const inputText = document.getElementById("inputText");
const todos = document.getElementById("todos");

addTodoButton.addEventListener("click",function(){
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph");
    todos.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

    paragraph.addEventListener("dblclick",function(){
        todos.removeChild(paragraph);
    })

})



clearTodosButton.addEventListener("click",function(){
    todos.remove();
})


