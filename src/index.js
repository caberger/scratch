import todoService from "./todo-service.js"

async function onload() {
    const hello = document.getElementById("hello")
    hello.innerHTML = "hello!"
    const todos = await todoService.getAll()
    console.log("todos:", todos)
}

window.addEventListener("DOMContentLoaded", onload)
