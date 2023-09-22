class ToDoService {
    #url = "https://jsonplaceholder.typicode.com/todos"

    async getAll() {
        let todos
        const response = await fetch(this.#url)
        if (response.ok) {
            todos = await response.json()
        }
        return todos
    }
}
const todoService = new ToDoService()
export default todoService