import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;

  return (
    <div className="input-area">
      <input className="input-area__input" disabled={disabled} id="add-text" onChange={onChange} placeholder="TODOを入力" value={todoText} />
      <button className="button" disabled={disabled} id="add-button" onClick={onClick}>追加</button>
    </div>
  );
};
