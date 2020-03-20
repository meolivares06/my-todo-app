import React, { useState} from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../redux/actions/addTodo'

const InputText = ({ text, onChange}) => {
  const handleOnChange = (e) => {
    e.preventDefault();
    onChange(e.target.value)
  }
  return (
    <input
      type="text"
      placeholder="whats come next..."
      value={text}
      onChange={handleOnChange} />
  )
}
const FormTodo = ({ addTodo}) => {
  const [text, setText] = useState('df');

  const handleOnClick = (e) => {
    e.preventDefault();
    addTodo(text);
  }
  const handleOnChange = (text) => {
    setText(text)
  }
  return (
    <form>
      <InputText text={text} onChange={handleOnChange}/>
      <button onClick={handleOnClick}>Add</button>
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}
const mapdispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => { dispatch(addTodo(text)) }
  }
}
export default connect(mapStateToProps, mapdispatchToProps)(FormTodo);