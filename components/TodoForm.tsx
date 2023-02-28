import * as React from 'react';
import './TodoForm.css';
import { useState } from 'react';
const TodoForm = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [valid, setisvalid] = useState(true);

  const InputHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setisvalid(true);
    }
    setEnteredValue(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setisvalid(false);
      return;
    }
    props.onAddGoals(enteredValue);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={`todo ${!valid ? 'invalid' : ''}$`}>
        <label> Course Goal </label>
        <input type="text" value={enteredValue} onChange={InputHandler} />
      </div>
      <div className="todo-submit">
        <button type="submit"> Add Goal </button>
      </div>
    </form>
  );
};

export default TodoForm;
