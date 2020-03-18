import React from 'react';
import './App.css';
import { v4 } from 'node-uuid';

const Header = () => <header>
  <h1>***My Todo List ***</h1>
</header>;
const Filter = () => (
  <footer>
    Show: All, <a href="#">Completed</a>, <a href="#">Todo</a>
  </footer>
);

const FormTodo = () => {
  return (
    <form>
      <input type="text" placeholder="..." />
      <button >Add</button>
    </form>
  )
};

const TodoList = ({todos}) => {
  return (
    <ul>
      {todos.map(todo => {
        return <li key={todo.id}><a href="#">{todo.text}</a></li>
      })}
    </ul>
  )
}
const todoList = [
  { text: "Learn Redux", completed: false, id: v4() },
  { text: "Learn RxJs", completed: false, id: v4() },
  { text: "Learn ReactJS", completed: false, id: v4() },
  { text: "Learn Angular", completed: false, id: v4() }
];
function App() {
  return (
    <section>
      <Header/>
      <main>
        <FormTodo />
        <TodoList todos={todoList}/>
        <br/>
        <Filter />
        <br/>
      </main>
      <footer>Copyright: me</footer>
    </section>
  );
}

export default App;
