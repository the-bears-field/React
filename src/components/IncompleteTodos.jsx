import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete,  onClickDelete } = props;

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul className="list">
        { todos.map((todo, index) => {
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
  );
};
