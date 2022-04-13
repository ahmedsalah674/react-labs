import { createStore } from "redux";

//Actions declaration
const ADD_TODO = "Add_TODO";
const DELETE_TODO = "DELETE_TODO";

//Actions
export const addTodo = payload => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        id
    }
}

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { todos: [...state.todos, action.payload] };
        case DELETE_TODO:
            return { todos: [...state.todos.filter((item, id) => id !== action.id)] }
        default:
            return state;
    }
}

export const store = createStore(todoReducer)
