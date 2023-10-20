import {BehaviorSubject} from "rxjs"
export interface ToDo {
    readonly userId: number
    readonly id: number
    readonly title: string,
    readonly completed: boolean
}

export interface Model {
    readonly message: string
    readonly todos: ToDo[]
}


const initialState: Model = {
    todos: [],
    message: "lassen wir die Pause ausfallen und hören 5 Minuten früher auf"
}

const store = new BehaviorSubject<Model>(initialState)

export {store}