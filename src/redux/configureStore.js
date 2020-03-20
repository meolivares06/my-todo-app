import { v4 } from "node-uuid";
import { createStore, combineReducers } from "redux";
import todos from './reducers/todos';

const persistentStateData = {
    todos: [
        { text: "Learn Redux", completed: false, id: v4() },
        { text: "Learn RxJs", completed: false, id: v4() },
        { text: "Learn ReactJS", completed: false, id: v4() },
        { text: "Learn Angular", completed: false, id: v4() }
    ]
}
const configureStore = () => {

    const todoApp = combineReducers({
        todos
    });
    const store = createStore(todoApp, persistentStateData);
    return store;
}

export default configureStore;