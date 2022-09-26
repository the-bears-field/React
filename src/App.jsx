import React, { useEffect, useState } from "react";
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
    <div className="input-area">
      <input className="input-area__input" id="add-text" onChange={onChangeTodoText} placeholder="TODOを入力" value={todoText} />
      <button className="button" id="add-button" onClick={onClickAdd}>追加</button>
    </div>
    <div className="imcomplete-area">
      <p className="title">未完了のTODO</p>
      <ul className="list">
        { incompleteTodos.map((todo, index) => {
            return (
              <li className="list__row" key={todo} >
                <p className="list__title">{todo}</p>
                <button className="button" onClick={() => onClickComplete(index)}>完了</button>
                <button className="button" onClick={() => onClickDelete(index)}>削除</button>
              </li>
            );
        }) }
      </ul>
    </div>
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul className="list">
        { completeTodos.map((todo, index) => {
          return (
            <li className="list__row" key={todo} >
              <p className="list__title">{todo}</p>
              <button className="button" onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        }) }
      </ul>
    </div>
  </>
  );
};
