import { v4 } from "node-uuid";
const todo = (partialState, action) => {
    switch (action.type) {
        // Se agrega un TODO al listado todos
        case 'ADD_TODO':
            return {
                text: action.text,
                completed: false,
                id: v4()
            }

        // Dado el id se pone el completed al contrario dentro del listado
        case 'TOGGLE_TODO':

            if (partialState.id === action.id) {
                return {
                    text: todo.text,
                    completed: !todo.completed,
                    id: todo.id
                }
            } else {
                return todo;
            }
        default:
            return partialState;
    }
}
const todos = (currentState = [], action) => {
    switch (action.type) {
        // Se agrega un TODO al listado todos
        case 'ADD_TODO':
            return [
                ...currentState,
                todo(undefined, action)
            ];

        // Dado el id se pone el completed al contrario dentro del listado
        case 'TOGGLE_TODO':
            return currentState.map(todo => {
                todo(todo, action)
            });
        default:
            return currentState;

    }
}
export default todos;