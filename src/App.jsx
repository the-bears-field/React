import React, { useEffect, useState } from "react";
import './index.css';

export const App = () => {
  const [ todoText, setTodoText ] = useState('');

  const [ incompleteTodos, setIncompleteTodos ] = useState([
    'あああ',
    'いいい'
  ]);

  const [ completeTodos, setCompleteTodos ] = useState(['ううう']);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (!todoText) return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  };

  const onClickDelete = (index) => {
    const newToDos = [...incompleteTodos];
    newToDos.splice(index, 1);
    setIncompleteTodos(newToDos);
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
                <button className="button">完了</button>
                <button className="button" onClick={() => onClickDelete(index)}>削除</button>
              </li>
            );
        }) }
      </ul>
    </div>
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul className="list">
        { completeTodos.map((todo) => {
          return (
            <li className="list__row" key={todo} >
              <p className="list__title">{todo}</p>
              <button className="button">戻す</button>
            </li>
          );
        }) }
      </ul>
    </div>
  </>
  );
};
