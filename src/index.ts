import { produce } from "immer"
import { Model, store } from "./model"
import { todoService } from "./todo-service"
import "./todo-table-component"

const todos = await todoService.getAll()
/*
const nextState: Model = {
    todos,
    message
}
*/
const nextState = produce(store.getValue(), model => {
    model.todos = todos
})
store.next(nextState)
