import { v4 } from "node-uuid";
import { createStore, combineReducers } from "redux";

const initialTodoList = [
  { text: "Learn Redux", completed: false, id: v4() },
  { text: "Learn RxJs", completed: false, id: v4() },
  { text: "Learn ReactJS", completed: false, id: v4() },
  { text: "Learn Angular", completed: false, id: v4() }
];
const configureStore = () => {


    const todos = (currentState = initialTodoList, action) => {
        switch (action.type) {
            case 'ADD_TODO':
                // Se agrega un TODO al listado todos
                const nextState = [...currentState, {text: action.text, completed: false, id: v4()}];
                return nextState;

            default:
            return currentState;

        }
    }

    const todoApp = combineReducers({
    todos
    });
    const store = createStore(todoApp);
    return store;
}

export default configureStore;