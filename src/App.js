import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { Header, Filter, Footer } from './components/Layout';
import FormTodo from './components/FormTodo';
import { Provider } from "react-redux";
import configureStore from './redux/configureStore';


const store = configureStore();




function App() {
  return (
    <section>
      <Header />
      <main>

        <Provider store={store}>
          <FormTodo />
          <TodoList />
        </Provider>
        <br />
        <Filter />
        <br />
      </main>
      <Footer/>
    </section>
  );
}

export default App;
