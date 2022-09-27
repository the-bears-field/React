import React from "react";

export const CompleteTodos = (props) => {
  const { todos,  onClickBack } = props;

  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul className="list">
        { todos.map((todo, index) => {
          return (
            <li className="list__row" key={todo} >
              <p className="list__title">{todo}</p>
              <button className="button" onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        }) }
      </ul>
    </div>
  );
};
