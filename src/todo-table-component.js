import { render, html } from "../node_modules/lit-html/lit-html.js"
import { todoService } from "./todo-service.js"

const rowTemplate = todo  => html`
    <tr><td>${todo.id}</td><td>${todo.title}</td></tr>
`
const tableTemplate = todos => {
    const rows = todos.map(todo => rowTemplate(todo))
    return html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<table class="w3-table-all">
<thead>
    <tr><th>Id</th><th>Title</th></tr>
</thead>
<tbody>
    ${rows}
</tbody>
</table>
`
}
class TodoTableComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }
    async connectedCallback() {
        console.log("connected")
        const todos = await todoService.getAll()
        render(tableTemplate(todos), this.shadowRoot)
    }
}
customElements.define("todo-table", TodoTableComponent)