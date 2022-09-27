import React, { useEffect, useState } from "react";
import { CompleteTodos } from "./components/CompleteTodos";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { InputTodo } from './components/InputTodo';
import './index.css';

export const App = () => {
  const [ todoText, setTodoText ] = useState('');

  const [ incompleteTodos, setIncompleteTodos ] = useState([]);

  const [ completeTodos, setCompleteTodos ] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (!todoText) return;
    addIncompeteTodosElement(todoText);
    setTodoText('');
  };

  const onClickDelete = (index) => {
    deleteIncompeteTodosElement(index);
  };

  const onClickComplete = (index) => {
    deleteIncompeteTodosElement(index);

    const newCompeleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompeleteTodos);
  };

  const onClickBack = (index) => {
    const newCompeleteTodos = [...completeTodos];
    newCompeleteTodos.splice(index, 1);
    setCompleteTodos(newCompeleteTodos);
    addIncompeteTodosElement(completeTodos[index]);
  };

  const deleteIncompeteTodosElement = (index) => {
    const newIncompeteTodos = [...incompleteTodos];
    newIncompeteTodos.splice(index, 1);
    setIncompleteTodos(newIncompeteTodos);
  };

  const addIncompeteTodosElement = (todoText) => {
    const newIncompeteTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newIncompeteTodos);
  };

  return (
  <>
    <InputTodo
      todoText={todoText}
      onChange={onChangeTodoText}
      onClick={onClickAdd}
    />
    <IncompleteTodos
      todos={incompleteTodos}
      onClickComplete={onClickComplete}
      onClickDelete={onClickDelete}
    />
    <CompleteTodos
      todos={completeTodos}
      onClickBack={onClickBack}
    />
  </>
  );
};
